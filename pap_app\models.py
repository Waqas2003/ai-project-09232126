from django.db import models

class PowerPlant(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    capacity = models.IntegerField()

class Employee(models.Model):
    name = models.CharField(max_length=255)
    designation = models.CharField(max_length=255)
    department = models.CharField(max_length=255)

class News(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    date = models.DateField()