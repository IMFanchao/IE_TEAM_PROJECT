# Generated by Django 2.2 on 2019-04-28 05:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('VICHealth_app', '0003_delete_location'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='club',
            name='Type',
        ),
        migrations.RemoveField(
            model_name='club',
            name='suburb',
        ),
        migrations.AddField(
            model_name='club',
            name='latitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='club',
            name='longitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='club',
            name='place_id',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='club',
            name='state',
            field=models.CharField(blank=True, max_length=3, null=True),
        ),
    ]
