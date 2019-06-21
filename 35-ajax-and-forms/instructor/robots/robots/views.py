from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from robots.models import Robot
from django.core.exceptions import ValidationError
import json
import pdb

def robots_index(request):
  context = { 'robots' : Robot.objects.all() }
  response = render(request, 'base.html', context)
  return HttpResponse(response)

def robots_show(request, id):
  if request.is_ajax():
    robot = Robot.objects.get(pk=id)
    # Return JSON
    # data = {
    #   "name" : robot.name,
    #   "address" : robot.address,
    #   "model_number" : robot.model_number,
    #   "lasers" : robot.lasers,
    #   "japanese" : robot.japanese
    # }
    # return JsonResponse(data)
    # Return HTML
    context = {'robot': robot}
    response = render(request, 'robot.html', context)
    return HttpResponse(response)
  else:
    context = { 'robot': Robot.objects.get(pk=id) }
    response = render(request, 'robot.html', context)
    return HttpResponse(response)

def robots_edit(request, id):
  robot = Robot.objects.get(pk=id)
  context = { 'robot': robot, 'action': 'update' }
  response = render(request, 'form.html', context)
  return HttpResponse(response)

def robots_update(request, id):
  robot = Robot.objects.get(pk=id)
  robot.name = request.body["name"]
  robot.model_number = request.body["model_number"]
  robot.address = request.body["address"]
  try:
    robot.full_clean()
  except ValidationError as err:
    context = {'robot': robot, 'action': 'update', 'error': err }
    response = render(request, 'form.html', context)
    return HttpResponse(response)
  robot.save()
  return redirect('/')  

def robots_new(request):
  robot = Robot()
  context = { 'robot': robot, 'action': 'create' }
  response = render(request, 'form.html', context)
  return HttpResponse(response)

def robots_create(request):
  robot = Robot()
  body = request.body.decode('utf-8')
  body = json.loads(body)
  robot.name = body["name"]
  robot.model_number = body["model_number"]
  robot.address = body["address"]
  try:
    robot.full_clean()
  except ValidationError as err:
    response = {'error': err }
    return JsonResponse(response)
  robot.save()
  # Return JSON response
  #response = {'robot': {'id': robot.pk, 'name': robot.name, 'model_number': robot.model_number, 'address': robot.address}}
  #return JsonResponse(response)
  # Return HTML
  context = {'robot': robot}
  response = render(request, 'robot.html', context)
  return HttpResponse(response)
  

def robots_delete(request, id):
  robot = Robot.objects.get(pk=id)
  robot.delete()
  return redirect('/')
