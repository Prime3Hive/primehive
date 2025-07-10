# PrimeHive Digital Solutions

A modern frontend application built with Vite and Supabase for PrimeHive Digital Solutions.

## Features

- **Modern Frontend**: Built with Vite for fast development and optimized builds
- **Authentication**: Supabase authentication with email/password
- **Responsive Design**: Bootstrap 5 with custom styling
- **Single Page Application**: Client-side routing
- **Contact Form**: Contact form with validation
- **Services Showcase**: Display of company services

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd primehive-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy your project URL and anon key
   - Create a `.env` file based on `.env.example`
   - Add your Supabase credentials

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env` file in the root directory with:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── navbar.js       # Navigation component
│   └── footer.js       # Footer component
├── lib/                # Utility libraries
│   ├── supabase.js     # Supabase client setup
│   ├── auth.js         # Authentication manager
│   └── router.js       # Client-side router
├── pages/              # Page components
│   ├── home.js         # Homepage
│   ├── contact.js      # Contact page
│   ├── signin.js       # Sign in page
│   └── signup.js       # Sign up page
└── main.js             # Application entry point
```

## Technologies Used

- **Vite**: Build tool and development server
- **Supabase**: Backend as a Service (authentication, database)
- **Bootstrap 5**: CSS framework
- **Font Awesome**: Icons
- **Vanilla JavaScript**: No framework dependencies

## Features

### Authentication
- User registration with email/password
- User login/logout
- Session management
- Protected routes

### Pages
- **Home**: Hero section with slideshow, services showcase
- **Contact**: Contact form with validation
- **Sign In/Up**: Authentication forms

### Design
- Responsive design for all screen sizes
- Modern animations and transitions
- Glass morphism effects
- Custom CSS styling

## Deployment

The application can be deployed to any static hosting service:

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Import your project for seamless deployment
- **GitHub Pages**: Use GitHub Actions for deployment

Make sure to set your environment variables in your hosting platform's settings.