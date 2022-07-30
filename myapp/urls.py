
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home,name='home'),
    path('aboutme/',views.about,name='about'),
    path('contactme/',views.contact,name='contact')
]

