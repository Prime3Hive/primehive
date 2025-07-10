export function renderNavbar(container, authManager) {
    function updateNavbar() {
        const isAuthenticated = authManager.isAuthenticated();
        
        container.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand d-flex align-items-center" href="/" data-route>
                        <img src="/static/images/logo.jpg" alt="PrimeHive Logo" class="logo-img me-2">
                        <span>PrimeHive</span>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/" data-route>Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#services">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/contact" data-route>Contact</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            ${isAuthenticated ? `
                                <li class="nav-item">
                                    <span class="navbar-text me-3">Welcome, ${authManager.getUser()?.email}</span>
                                </li>
                                <li class="nav-item">
                                    <button class="btn btn-outline-light btn-sm" id="signout-btn">Sign Out</button>
                                </li>
                            ` : `
                                <li class="nav-item">
                                    <a class="nav-link" href="/signin" data-route>Sign In</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/signup" data-route>Sign Up</a>
                                </li>
                            `}
                        </ul>
                    </div>
                </div>
            </nav>
        `;

        // Add sign out handler
        const signOutBtn = container.querySelector('#signout-btn');
        if (signOutBtn) {
            signOutBtn.addEventListener('click', async () => {
                try {
                    await authManager.signOut();
                    window.location.href = '/';
                } catch (error) {
                    console.error('Sign out error:', error);
                }
            });
        }
    }

    // Initial render
    updateNavbar();

    // Listen for auth state changes
    authManager.onAuthStateChange(() => {
        updateNavbar();
    });
}