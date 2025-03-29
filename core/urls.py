from django.urls import path, include
from . import views
from . import auth

urlpatterns = [
    path('', views.home, name='home'),
    path('contact/', views.contact, name='contact'),
    path('signup/', auth.signup, name='signup'),
    path('signin/', auth.signin, name='signin'),
    path('signout/', auth.signout, name='signout'),
]
