from rest_framework import viewsets
from .serializer import ConceptoNominaSerializer
from .models import ConceptoNomina

class ConceptoNominaViewSet(viewsets.ModelViewSet):
    queryset = ConceptoNomina.objects.all().order_by('id')
    serializer_class = ConceptoNominaSerializer