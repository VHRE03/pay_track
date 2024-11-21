from django.urls import include, path
from rest_framework import routers
from .views import AdministradorViewSet, AdminLogin, AdminData

router = routers.DefaultRouter()
router.register(r'administradores', AdministradorViewSet)

urlpatterns = [
    path('v1/', include(router.urls)),
    path('v1/login/', AdminLogin.as_view(), name='login'),
    path('v1/user-login/', AdminData.as_view(), name='admin-data'),
]
