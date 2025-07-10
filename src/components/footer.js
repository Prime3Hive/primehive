export function renderFooter(container) {
    container.innerHTML = `
        <footer class="bg-dark text-light py-4 mt-auto">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h5>PrimeHive Digital Solutions</h5>
                        <p>Empowering Your Business with Innovative Digital Solutions</p>
                        <div class="social-links mt-3">
                            <a href="https://twitter.com/primehive" class="text-light me-3" target="_blank">
                                <i class="fab fa-twitter fa-lg"></i>
                            </a>
                            <a href="https://linkedin.com/company/primehive" class="text-light me-3" target="_blank">
                                <i class="fab fa-linkedin fa-lg"></i>
                            </a>
                            <a href="https://github.com/primehive" class="text-light" target="_blank">
                                <i class="fab fa-github fa-lg"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h5>Quick Links</h5>
                        <ul class="list-unstyled">
                            <li><a href="/" class="text-light" data-route>Home</a></li>
                            <li><a href="#services" class="text-light">Services</a></li>
                            <li><a href="/contact" class="text-light" data-route>Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h5>Contact Us</h5>
                        <ul class="list-unstyled">
                            <li><i class="fas fa-envelope me-2"></i> info@primehive.com</li>
                            <li><i class="fas fa-phone me-2"></i> (234) 903-050-5661</li>
                            <li><i class="fas fa-map-marker-alt me-2"></i> Abuja, Nigeria</li>
                        </ul>
                    </div>
                </div>
                <hr class="mt-4">
                <div class="text-center">
                    <p>&copy; ${new Date().getFullYear()} PrimeHive Digital Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
}