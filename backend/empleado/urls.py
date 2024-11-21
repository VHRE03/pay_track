from django.urls import include, path
from rest_framework import routers
from .views import EmpleadoViewSet

router = routers.DefaultRouter()
router.register(r'empleados', EmpleadoViewSet)

urlpatterns = [
    path('v1/', include(router.urls))
]
