from rest_framework import viewsets
from .serializer import NominaSerializer
from .models import Nomina

class NominaViewSet(viewsets.ModelViewSet):
    queryset = Nomina.objects.all().order_by('id')
    serializer_class = NominaSerializer