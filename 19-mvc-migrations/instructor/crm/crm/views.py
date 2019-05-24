from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render

def root_path(request):
    return HttpResponseRedirect('/contacts')

def contacts_list(request):
    context = {'contacts': []}
    html = render(request, 'index.html', context)
    return HttpResponse(html)

def gallery(request):
    return HttpResponseRedirect('portfolio/')

def portfolio(request):
    html = render(request, 'test.html')
    return HttpResponse(html)
