import ipdb
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from film_library.models import Film

def home(request):
    films = Film.objects.all()
    context = {'films': films}
    html_response = render(request, 'index.html', context)
    return HttpResponse(html_response)

@require_http_methods(['POST'])
def film_create(request):
    ipdb.set_trace()
    user_title = request.POST['title']
    user_description = request.POST['description']
    user_country = request.POST['country']
    user_rating = request.POST['rating']
    film = Film(title=user_title, country=user_country, rating=user_rating, description=user_description)
    film.save()
    # or this
    # Film.objects.create(title=user_title,
    #                     description=user_description,
    #                     rating=user_rating,
    #                     country=user_country
    #                     )
    return HttpResponseRedirect(reverse('home'))

def temp(request):
    return HttpResponse('received request to temp')