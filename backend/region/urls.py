from django.urls import include, path
from rest_framework import routers
from .views import RegionViewSet

router = routers.DefaultRouter()
router.register(r'regiones', RegionViewSet)

urlpatterns = [
    path('v1/', include(router.urls))
]
