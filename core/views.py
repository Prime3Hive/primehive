from django.shortcuts import render

# Create your views here.

def home(request):
    services = [
        {
            'title': 'Web Development',
            'description': 'Custom web applications tailored to your needs',
            'icon': 'fas fa-code'
        },
        {
            'title': 'Mobile Development',
            'description': 'Native and cross-platform mobile applications',
            'icon': 'fas fa-mobile-alt'
        },
        {
            'title': 'Cloud Solutions',
            'description': 'Scalable cloud infrastructure and deployment',
            'icon': 'fas fa-cloud'
        },
        {
            'title': 'UI/UX Design',
            'description': 'Beautiful and intuitive user interfaces',
            'icon': 'fas fa-paint-brush'
        }
    ]
    return render(request, 'core/home.html', {'services': services})

def contact(request):
    return render(request, 'core/contact.html')
