from django.urls import include, path
from rest_framework import routers
from .views import PuestoConceptoViewSet

router = routers.DefaultRouter()
router.register(r'puesto_conceptos', PuestoConceptoViewSet)

urlpatterns = [
    path('v1/', include(router.urls))
]
