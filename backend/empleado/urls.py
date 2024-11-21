from django.urls import include, path
from rest_framework import routers
from .views import EmpleadoViewSet
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'empleados', EmpleadoViewSet)

urlpatterns = [
    path('v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Documentación PayTrack APIs"))
]
