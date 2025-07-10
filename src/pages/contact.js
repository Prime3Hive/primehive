export function renderContact(container, authManager) {
    container.innerHTML = `
        <div class="container py-5">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="form-container">
                        <h2 class="text-center mb-4">Contact Us</h2>
                        <div id="contact-messages"></div>
                        <form id="contact-form" class="needs-validation" novalidate>
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" name="name" required>
                                <div class="invalid-feedback">
                                    Please provide your name.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" name="email" required>
                                <div class="invalid-feedback">
                                    Please provide a valid email address.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input type="tel" class="form-control" id="phone" name="phone">
                            </div>
                            <div class="mb-3">
                                <label for="service" class="form-label">Service of Interest</label>
                                <select class="form-select" id="service" name="service" required>
                                    <option value="">Select a service...</option>
                                    <option value="web-development">Web Development</option>
                                    <option value="mobile-development">Mobile Development</option>
                                    <option value="cloud-solutions">Cloud Solutions</option>
                                    <option value="ui-ux-design">UI/UX Design</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a service.
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
                                <div class="invalid-feedback">
                                    Please provide your message.
                                </div>
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Add form validation and submission
    const form = container.querySelector('#contact-form');
    const messagesContainer = container.querySelector('#contact-messages');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        const formData = new FormData(form);
        const contactData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            message: formData.get('message'),
            created_at: new Date().toISOString()
        };

        try {
            // Here you would typically save to Supabase
            // For now, we'll just show a success message
            showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            form.reset();
            form.classList.remove('was-validated');
        } catch (error) {
            showMessage('There was an error sending your message. Please try again.', 'danger');
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