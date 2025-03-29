import pyrebase
from django.shortcuts import render, redirect
from django.contrib import messages
from .firebase_config import firebaseConfig

firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()

def signup(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        try:
            user = auth.create_user_with_email_and_password(email, password)
            session_id = user['idToken']
            request.session['uid'] = str(session_id)
            return redirect('home')
        except Exception as e:
            error_message = str(e)
            if "EMAIL_EXISTS" in error_message:
                messages.error(request, "Email already exists")
            else:
                messages.error(request, "Error in signup")
            return redirect('signup')
    return render(request, 'core/signup.html')

def signin(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        try:
            user = auth.sign_in_with_email_and_password(email, password)
            session_id = user['idToken']
            request.session['uid'] = str(session_id)
            return redirect('home')
        except Exception as e:
            messages.error(request, "Invalid credentials")
            return redirect('signin')
    return render(request, 'core/signin.html')

def signout(request):
    try:
        del request.session['uid']
    except KeyError:
        pass
    return redirect('home')
