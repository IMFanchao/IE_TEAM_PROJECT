from django.urls import path
from . import views

app_name = 'VICHealth_app'

urlpatterns = [
    path('check_activity_level/', views.check_activity_level, name = 'check_activity_level'),
    path('health_tips/', views.health_tips, name = 'health_tips'),
    path('sub_info/', views.sub_info, name = 'sub_info'),
    path('', views.index, name = 'index')
]
