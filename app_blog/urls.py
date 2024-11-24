# app_blog/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.feed, name='feed'),
    path('browse/', views.browse, name='browse'),
    path('post/create/', views.create_post, name='create_post'),
]