from django.db import models

class ConceptoNomina(models.Model):
    PAYMENT_METHOD_CHOICES = [
        ('PERCEPCION', 'percepcion'),
        ('DEDUCCION', 'deduccion'),
    ]
    
    nombre = models.CharField(max_length=100, blank=False)
    tipo = models.CharField(max_length=20, choices=PAYMENT_METHOD_CHOICES)