from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from .models import PuestoConcepto

@receiver([post_save, post_delete], sender=PuestoConcepto)
def actualizar_sueldo_quincenal(sender, instance, **kwargs):
    puesto = instance.puesto
    puesto.sueldo_quincenal = puesto.calcular_sueldo_quincenal()
    puesto.save()