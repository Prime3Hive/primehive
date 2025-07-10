export function renderSignIn(container, authManager) {
    container.innerHTML = `
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card shadow-lg">
                        <div class="card-body p-5">
                            <h2 class="text-center mb-4">Welcome Back</h2>
                            
                            <div id="signin-messages"></div>

                            <form id="signin-form" class="needs-validation" novalidate>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" name="email" required>
                                    <div class="invalid-feedback">
                                        Please provide a valid email address.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password" name="password" required>
                                    <div class="invalid-feedback">
                                        Please enter your password.
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 mb-3">
                                    <span class="btn-text">Sign In</span>
                                    <span class="btn-spinner spinner-border spinner-border-sm d-none" role="status"></span>
                                </button>
                                <p class="text-center mb-0">Don't have an account? <a href="/signup" data-route>Sign Up</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    const form = container.querySelector('#signin-form');
    const messagesContainer = container.querySelector('#signin-messages');
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
            await authManager.signIn(email, password);
            showMessage('Sign in successful! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
        } catch (error) {
            showMessage(error.message || 'Invalid credentials', 'danger');
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