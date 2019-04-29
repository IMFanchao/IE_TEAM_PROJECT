from django.shortcuts import render, render_to_response, get_object_or_404, redirect
from .models import Club
from .forms import InputForm

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
    club=Club.objects.all()
    form=InputForm()


    context = { "club":club, "form":form }
    return render(request, 'VICHealth_app/sub_info.html', context)
