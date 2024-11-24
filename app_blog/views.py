# app_blog/views.py

from django.shortcuts import render

# Create your views here.

def feed(request):
    return render(request, 'feed.html')

def browse(request):
    return render(request, 'browse.html')

def view_post(request):
    return render(request, 'post_view.html')
    
def create_post(request):
    return render(request, 'post_create.html')

def edit_post(request):
    return render(request, 'post_edit.html')