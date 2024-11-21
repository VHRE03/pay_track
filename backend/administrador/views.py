from rest_framework import viewsets, status
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .serializer import AdministradorSerializer
from .models import Administrador

class AdministradorViewSet(viewsets.ModelViewSet):
    queryset = Administrador.objects.all().order_by('id')
    serializer_class = AdministradorSerializer
    
    def create(self, request, *args, **kwargs):
        
        # Serializar los datos del administrador
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Guardar el administrador
        admin = serializer.save()
        
        # Crear el token para el nuevo administrador
        token = Token.objects.create(user=admin.user)
        
        # Devolver la respuesta con el token y los datos del administrador
        return Response({'admin': serializer.data, 'token': token.key}, status=status.HTTP_201_CREATED);

class AdminLogin(APIView):
    def post(self, request):
        
        admin = authenticate(username = request.data['username'], password = request.data['password'])
        
        if admin:
            token, created = Token.objects.get_or_create(admin=admin)
            return Response({'token': token.key})
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
  
# Obtener los datos del usuario por medio del token
class AdminData(APIView):
    
    permission_classes = [IsAuthenticated]
    
    def get(self, request):
        
        # Obtener el administrador autenticado
        admin = request.admin
        
        # Serializar los datos del administrador
        serializer = AdministradorSerializer(admin)
        
        # Devuelve los datos serializados
        return Response(serializer.data)