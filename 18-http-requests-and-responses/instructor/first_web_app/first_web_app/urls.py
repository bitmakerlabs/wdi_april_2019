"""first_web_app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
# from first_web_app.views import home_page, welcome_page, about_page, about_owner, policy_page
from first_web_app import views

urlpatterns = [
  path('', views.home_page),
  path('welcome/', views.welcome_page),
  path('about/', views.about_page),
  path('about_the_owner/', views.about_owner),
  path('privacy_policy/', views.policy_page)
]
