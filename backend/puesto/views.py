from rest_framework import viewsets
from .serializer import PuestoSerializer
from .models import Puesto

class PuestoViewSet(viewsets.ModelViewSet):
    queryset = Puesto.objects.all().order_by('id')
    serializer_class = PuestoSerializer