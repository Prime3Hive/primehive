export function renderHome(container, authManager) {
    const services = [
        {
            title: 'Web Development',
            description: 'Custom web applications tailored to your needs',
            icon: 'fas fa-code'
        },
        {
            title: 'Mobile Development',
            description: 'Native and cross-platform mobile applications',
            icon: 'fas fa-mobile-alt'
        },
        {
            title: 'Cloud Solutions',
            description: 'Scalable cloud infrastructure and deployment',
            icon: 'fas fa-cloud'
        },
        {
            title: 'UI/UX Design',
            description: 'Beautiful and intuitive user interfaces',
            icon: 'fas fa-paint-brush'
        }
    ];

    container.innerHTML = `
        <!-- Hero Section -->
        <section class="hero position-relative overflow-hidden">
            <div class="hero-bg">
                <div class="gradient-overlay"></div>
                <div class="pattern-overlay"></div>
            </div>
            <div class="container position-relative">
                <div class="row align-items-center min-vh-75">
                    <div class="col-lg-7 hero-content py-5">
                        <h1 class="display-4 fw-bold mb-4 text-white">Transform Your Business with Smart Solutions</h1>
                        <p class="lead mb-5 text-light">We help businesses optimize their operations through innovative software solutions and expert consulting services.</p>
                        <div class="d-flex gap-3 position-relative" style="z-index: 100;">
                            <a href="/contact" class="btn btn-primary btn-lg" data-route>Get Started</a>
                            <a href="#services" class="btn btn-outline-light btn-lg">Our Services</a>
                        </div>
                    </div>
                    <div class="col-lg-5 d-none d-lg-block">
                        <div class="hero-image-container">
                            <div class="hero-image-wrapper">
                                <div id="heroSlideshow" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#heroSlideshow" data-bs-slide-to="0" class="active"></button>
                                        <button type="button" data-bs-target="#heroSlideshow" data-bs-slide-to="1"></button>
                                        <button type="button" data-bs-target="#heroSlideshow" data-bs-slide-to="2"></button>
                                        <button type="button" data-bs-target="#heroSlideshow" data-bs-slide-to="3"></button>
                                        <button type="button" data-bs-target="#heroSlideshow" data-bs-slide-to="4"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="/static/images/hero-image.jpg" alt="Business Solutions" class="img-fluid rounded-4">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/static/images/Prime hive.jpg" alt="Prime Hive Solutions" class="img-fluid rounded-4">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/static/images/Primehive5.jpg" alt="Digital Innovation" class="img-fluid rounded-4">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/static/images/primehive 3.jpg" alt="Business Excellence" class="img-fluid rounded-4">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="/static/images/primehive 7.jpg" alt="Technology Solutions" class="img-fluid rounded-4">
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#heroSlideshow" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#heroSlideshow" data-bs-slide="next">
                                        <span class="carousel-control-next-icon"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-shape">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#ffffff" fill-opacity="1" d="M0,128L80,144C160,160,320,192,480,186.7C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services py-5">
            <div class="container">
                <h2 class="text-center mb-5">Our Services</h2>
                <div class="row">
                    ${services.map(service => `
                        <div class="col-md-6 col-lg-3 mb-4">
                            <div class="card service-card h-100">
                                <div class="card-body text-center">
                                    <i class="${service.icon} fa-3x mb-3 text-primary"></i>
                                    <h5 class="card-title">${service.title}</h5>
                                    <p class="card-text">${service.description}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    // Add the hero styles
    const style = document.createElement('style');
    style.textContent = `
        .hero {
            position: relative;
            background: #0f172a;
            padding: 0;
            margin-top: 0;
            overflow: hidden;
            min-height: 100vh;
        }

        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
        }

        .hero-image-container {
            position: relative;
            z-index: 10;
            padding: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
        }

        .hero-image-wrapper {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin: auto;
        }

        .hero-image-wrapper::before {
            content: '';
            position: absolute;
            top: -20px;
            right: -20px;
            bottom: 20px;
            left: 20px;
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.1);
            z-index: -1;
        }

        .carousel {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .carousel-item {
            transition: transform 0.6s ease-in-out;
        }

        .carousel-item img {
            width: 100%;
            height: 500px;
            object-fit: cover;
            object-position: center;
        }

        .carousel-control-prev,
        .carousel-control-next {
            width: 10%;
            opacity: 0;
            transition: opacity 0.3s ease;
            background: linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%);
            border-radius: 20px;
        }

        .carousel-control-next {
            background: linear-gradient(270deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%);
        }

        .carousel:hover .carousel-control-prev,
        .carousel:hover .carousel-control-next {
            opacity: 1;
        }

        .carousel-indicators {
            margin-bottom: 0.5rem;
        }

        .carousel-indicators button {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin: 0 4px;
            background-color: rgba(255, 255, 255, 0.5);
            border: 2px solid rgba(255, 255, 255, 0.8);
        }

        .carousel-indicators button.active {
            background-color: white;
            transform: scale(1.2);
            transition: transform 0.3s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: scale(1.02); }
            to { opacity: 1; transform: scale(1); }
        }

        .carousel-item.active {
            animation: fadeIn 0.6s ease-in-out;
        }

        @media (max-width: 992px) {
            .hero-image-wrapper {
                max-width: 100%;
            }
            
            .carousel-item img {
                height: 400px;
            }
        }

        .min-vh-75 {
            min-height: 85vh;
        }

        .hero-content {
            padding-top: 4rem !important;
            position: relative;
            z-index: 10;
        }

        .hero-shape {
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            line-height: 0;
            z-index: 2;
        }

        .hero-shape svg {
            position: relative;
            display: block;
            width: 100%;
            height: 120px;
        }

        .btn {
            padding: 1rem 2.5rem;
            font-weight: 600;
            border-radius: 50px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            position: relative;
            z-index: 100;
        }

        .btn-lg {
            padding: 1rem 3rem;
            font-size: 1rem;
        }

        .btn-primary {
            background: #ffffff;
            border: none;
            color: #0f172a;
        }

        .btn-primary:hover {
            background: #f8f9fa;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            color: #0f172a;
        }

        .btn-outline-light {
            border: 2px solid rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.05);
        }

        .btn-outline-light:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.5);
            transform: translateY(-2px);
        }

        .display-4 {
            font-size: 3.5rem;
            font-weight: 700;
            line-height: 1.2;
            letter-spacing: -1px;
        }

        .lead {
            font-size: 1.25rem;
            font-weight: 400;
            line-height: 1.6;
            opacity: 0.9;
        }

        @media (max-width: 991.98px) {
            .display-4 {
                font-size: 2.5rem;
            }
            .hero-content {
                padding-top: 7rem !important;
                padding-bottom: 3rem !important;
                text-align: center;
            }
            .d-flex.gap-3 {
                justify-content: center;
            }
        }

        .service-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: none;
            box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
            border-radius: 16px;
            overflow: hidden;
        }

        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .card {
            border-radius: 16px;
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
}