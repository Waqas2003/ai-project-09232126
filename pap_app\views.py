from django.shortcuts import render
from .models import PowerPlant, Employee, News

def home(request):
    return render(request, 'home.html')

def power_plants(request):
    power_plants = PowerPlant.objects.all()
    return render(request, 'power_plants.html', {'power_plants': power_plants})

def employees(request):
    employees = Employee.objects.all()
    return render(request, 'employees.html', {'employees': employees})

def news(request):
    news = News.objects.all()
    return render(request, 'news.html', {'news': news})