from django.db import models
from empleado.models import Empleado

class Administrador(models.Model):
    username = models.CharField(max_length=100, blank=False, unique=True)
    email = models.EmailField(max_length=100, blank=False, unique=True)
    password = models.CharField(max_length=100, blank=False)
    empleado = models.OneToOneField(Empleado, on_delete=models.DO_NOTHING)