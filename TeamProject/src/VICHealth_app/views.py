from django.shortcuts import render

# Create your views here.
def base(request):
    return render(request, 'VICHealth_app/base.html')

def index(request):
    return render(request, 'VICHealth_app/index.html')

def check_activity_level(request):
    return render(request, 'VICHealth_app/check_activity_level.html')

def health_tips(request):
    return render(request, 'VICHealth_app/health_tips.html')

def sub_info(request):
    return render(request, 'VICHealth_app/sub_info.html')
