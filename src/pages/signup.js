export function renderSignUp(container, authManager) {
    container.innerHTML = `
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card shadow-lg">
                        <div class="card-body p-5">
                            <h2 class="text-center mb-4">Create Account</h2>
                            
                            <div id="signup-messages"></div>

                            <form id="signup-form" class="needs-validation" novalidate>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" name="email" required>
                                    <div class="invalid-feedback">
                                        Please provide a valid email address.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" name="password" required minlength="6">
                                    <div class="invalid-feedback">
                                        Password must be at least 6 characters long.
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mb-3">
                                    <span class="btn-text">Sign Up</span>
                                    <span class="btn-spinner spinner-border spinner-border-sm d-none" role="status"></span>
                                </button>
                                <p class="text-center mb-0">Already have an account? <a href="/signin" data-route>Sign In</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const form = container.querySelector('#signup-form');
    const messagesContainer = container.querySelector('#signup-messages');
    const submitBtn = form.querySelector('button[type="submit"]');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnSpinner = submitBtn.querySelector('.btn-spinner');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');

        // Show loading state
        submitBtn.disabled = true;
        btnText.classList.add('d-none');
        btnSpinner.classList.remove('d-none');

        try {
            await authManager.signUp(email, password);
            showMessage('Account created successfully! Please check your email for verification.', 'success');
            form.reset();
            form.classList.remove('was-validated');
        } catch (error) {
            let errorMessage = error.message;
            if (errorMessage.includes('already registered')) {
                errorMessage = 'Email already exists';
            }
            showMessage(errorMessage || 'Error in signup', 'danger');
        } finally {
            // Reset loading state
            submitBtn.disabled = false;
            btnText.classList.remove('d-none');
            btnSpinner.classList.add('d-none');
        }
    });

    function showMessage(message, type) {
        messagesContainer.innerHTML = `
            <div class="alert alert-${type} alert-dismissible fade show">
                ${message}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        `;
    }
}