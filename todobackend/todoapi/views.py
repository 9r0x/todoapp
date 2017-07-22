# coding:utf-8
from django.shortcuts import render,get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from rest_framework.viewsets import ModelViewSet
from .serializers import TodoSerializer
from .models import Todo




class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

def index(request):
    return render(request,'index.html',{'title':'Todo List App'})
