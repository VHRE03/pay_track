from rest_framework import serializers
from .models import ConceptoNomina

class ConceptoNominaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConceptoNomina
        fields = '__all__'