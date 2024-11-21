from rest_framework import serializers
from .models import PuestoConcepto

class PuestoConceptoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PuestoConcepto
        fields = '__all__'