# Generated by Django 5.1.3 on 2024-11-20 03:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('puesto_concepto', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='puestoconcepto',
            name='importe',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=9),
        ),
    ]