from django.urls import include, path
from rest_framework import routers
from .views import NominaViewSet

router = routers.DefaultRouter()
router.register(r'nominas', NominaViewSet)

urlpatterns = [
    path('v1/', include(router.urls))
]
