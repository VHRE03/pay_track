# Generated by Django 5.1.3 on 2024-11-20 02:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('puesto', '0001_initial'),
        ('region', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Empleado',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('apellido', models.CharField(max_length=100)),
                ('activo', models.BooleanField(default=True)),
                ('puesto', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, to='puesto.puesto')),
                ('region', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='region.region')),
            ],
        ),
    ]