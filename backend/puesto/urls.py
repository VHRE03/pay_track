from django.urls import include, path
from rest_framework import routers
from .views import PuestoViewSet

router = routers.DefaultRouter()
router.register(r'puestos', PuestoViewSet)

urlpatterns = [
    path('v1/', include(router.urls))
]
