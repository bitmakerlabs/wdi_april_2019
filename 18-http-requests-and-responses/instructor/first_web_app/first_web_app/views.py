from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render

def welcome_page(request):
    html_response = render(request, 'index.html')
    return HttpResponse(html_response)

def about_page(request):

    context = {'name': 'Mister Toast', 
               'profile_image_url': 'https://s3.amazonaws.com/bitmakerhq/resources/web-development/bitkittens/20160709_164721.jpeg',
               'hobbies': ['napping', 'food', 'squirrel watching']
              }
    html_response = render(request, 'about.html', context)
    return HttpResponse(html_response)

def about_owner(request):
    context = {'name': 'Natalie', 
               'profile_image_url': None,
               'hobbies': ['napping', 'teaching']
              }
    html_response = render(request, 'about.html', context)
    return HttpResponse(html_response)

def policy_page(request):
    return HttpResponse('hi')

def home_page(request):
    return HttpResponseRedirect('welcome/')