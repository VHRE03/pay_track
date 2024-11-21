from django.urls import include, path
from rest_framework import routers
from .views import ConceptoNominaViewSet

router = routers.DefaultRouter()
router.register(r'concepto_nominas', ConceptoNominaViewSet)

urlpatterns = [
    path('v1/', include(router.urls))
]
