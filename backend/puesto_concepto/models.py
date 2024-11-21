from django.db import models
from concepto_nomina.models import ConceptoNomina
from puesto.models import Puesto

class PuestoConcepto(models.Model):
    concepto = models.ForeignKey(ConceptoNomina, on_delete=models.DO_NOTHING)
    puesto = models.ForeignKey(Puesto, on_delete=models.DO_NOTHING)
    importe = models.DecimalField(max_digits=9, decimal_places=2, default=0)
    