from rest_framework import viewsets
from .serializer import RegionSerializer
from .models import Region

class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all().order_by('id')
    serializer_class = RegionSerializer