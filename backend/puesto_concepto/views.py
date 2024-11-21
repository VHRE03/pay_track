from rest_framework import viewsets
from .serializer import PuestoConceptoSerializer
from .models import PuestoConcepto
from rest_framework.response import Response

class PuestoConceptoViewSet(viewsets.ModelViewSet):
    queryset = PuestoConcepto.objects.all().order_by('id')
    serializer_class = PuestoConceptoSerializer
    
    def get_queryset(self):
        puesto_id = self.request.query_params.get('puesto')
        if puesto_id:
            return PuestoConcepto.objects.filter(puesto = puesto_id)
        
        return super().get_queryset()
    
    def list(self, request, *args, **kwargs):
        
        queryset = self.filter_queryset(self.get_queryset())
        serializer_data = []
        
        for puesto_concepto in queryset:
            data = self.get_serializer(puesto_concepto).data
            
            data['concepto'] = {
                "nombre": puesto_concepto.concepto.nombre
            }
            
            data['tipo_concepto'] = {
                "tipo": puesto_concepto.concepto.tipo
            }
            
            serializer_data.append(data)
        
        return Response(serializer_data)