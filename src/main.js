import { createSupabaseClient } from './lib/supabase.js';
import { AuthManager } from './lib/auth.js';
import { Router } from './lib/router.js';
import { renderNavbar } from './components/navbar.js';
import { renderFooter } from './components/footer.js';

// Initialize Supabase client
const supabase = createSupabaseClient();
const authManager = new AuthManager(supabase);
const router = new Router();

// Initialize the application
async function initApp() {
    const app = document.getElementById('app');
    
    // Create main layout
    app.innerHTML = `
        <div id="navbar-container"></div>
        <main id="main-content" class="container py-4"></main>
        <div id="footer-container"></div>
    `;

    // Render navbar and footer
    renderNavbar(document.getElementById('navbar-container'), authManager);
    renderFooter(document.getElementById('footer-container'));

    // Initialize router
    router.init(document.getElementById('main-content'), authManager);

    // Check authentication state
    await authManager.initialize();
}

// Start the application
initApp();