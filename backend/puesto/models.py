from django.db import models

class Puesto(models.Model):
    nombre = models.CharField(max_length=100, blank=False)
    sueldo_quincenal = models.DecimalField(max_digits=9, decimal_places=2, default=0.00)
    
    def calcular_sueldo_quincenal(sefl):
        conceptos = sefl.puestoconcepto_set.all()
        total_percepciones = sum(c.importe for c in conceptos if c.concepto.tipo == 'PERCEPCION')
        total_deducciones = sum(c.importe for c in conceptos if c.concepto.tipo == 'DEDUCCION')
        return total_percepciones - total_deducciones