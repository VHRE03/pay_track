from django.db import models
from empleado.models import Empleado

class Nomina(models.Model):
    empleado = models.OneToOneField(Empleado, on_delete=models.DO_NOTHING)
    total_percepciones = models.DecimalField(max_digits=9, decimal_places=2)
    total_deducciones = models.DecimalField(max_digits=9, decimal_places=2)
    total_neto = models.DecimalField(max_digits=9, decimal_places=2)