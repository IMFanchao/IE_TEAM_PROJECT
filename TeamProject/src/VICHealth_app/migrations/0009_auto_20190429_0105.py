# Generated by Django 2.2 on 2019-04-29 01:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('VICHealth_app', '0008_auto_20190429_0103'),
    ]

    operations = [
        migrations.AlterField(
            model_name='club',
            name='place_id',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
