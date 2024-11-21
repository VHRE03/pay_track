from django.db import models
from region.models import Region
from puesto.models import Puesto

class Empleado(models.Model):
    nombre = models.CharField(max_length=100, blank=False)
    apellido = models.CharField(max_length=100, blank=False)
    activo = models.BooleanField(default=True)
    region = models.ForeignKey(Region, on_delete=models.DO_NOTHING)
    puesto = models.ForeignKey(Puesto, on_delete=models.DO_NOTHING)