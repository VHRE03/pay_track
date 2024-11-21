from rest_framework import viewsets
from .serializer import EmpleadoSerializer
from .models import Empleado
from rest_framework.response import Response

class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all().order_by('id')
    serializer_class = EmpleadoSerializer
    
    def list(self, request, *args, **kwargs):
        
        queryset = self.filter_queryset(self.get_queryset())
        serializer_data = []
        
        for empleado in queryset:
            data = self.get_serializer(empleado).data
            
            data['puesto'] = {
                "id": empleado.puesto.id,
                "nombre": empleado.puesto.nombre
            }
            
            data['region'] = {
                "id": empleado.region.id,
                "nombre": empleado.region.nombre
            }
            
            serializer_data.append(data)
        
        return Response(serializer_data)
    
    def retrieve(self, request, *args, **kwargs):
        empleado = self.get_object()
        data = self.get_serializer(empleado).data
        
        data['puesto'] = {
            "id": empleado.puesto.id,
            "nombre": empleado.puesto.nombre
        }
            
        data['region'] = {
            "id": empleado.region.id,
            "nombre": empleado.region.nombre
        }
        
        return Response(data)