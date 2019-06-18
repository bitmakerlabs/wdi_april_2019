from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render, get_object_or_404
from django.urls import reverse
from crm.models import Contact

def root_path(request):
    return HttpResponseRedirect(reverse('contacts_page'))

def contacts_list(request):
    context = {'title': 'CRM', 'contacts': Contact.objects.all()}
    html = render(request, 'index.html', context)
    return HttpResponse(html)

def contact_details_page(request, contact_id):
    # grab that contact from the db
    contact = get_object_or_404(Contact, id=contact_id)
    context = {'contact': contact, 'title': contact.full_name()}
    html_response = render(request, 'contact.html', context)

    # render the common template
    return HttpResponse(html_response)

def about(request):
    context = {'title': 'About this CRM'}
    html_resp = render(request, 'about.html', context)
    return HttpResponse(html_resp)

def no_nav(request):
    context = {}
    html_resp = render(request, 'no_nav.html', context)
    return HttpResponse(html_resp)

# def gallery(request):
#     return HttpResponseRedirect('portfolio/')

# def portfolio(request):
#     html = render(request, 'test.html')
#     return HttpResponse(html)
