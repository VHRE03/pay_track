from django.apps import AppConfig


class PuestoConceptoConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'puesto_concepto'
    
    def ready(self):
        import puesto_concepto.signals
