# Generated by Django 5.1.3 on 2024-11-20 02:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('administrador', '0001_initial'),
        ('empleado', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='administrador',
            name='empleado',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='empleado.empleado'),
        ),
    ]
