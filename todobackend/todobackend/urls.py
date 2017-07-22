from django.contrib import admin
from django.conf.urls import url
from todoapi.views import TodoViewSet
from todoapi.views import index

urlpatterns = [
     url(
        r'^$',
        TodoViewSet.as_view({'get': 'list', 'post': 'create'}),
        name='todo-list',
    ),
    url(r'^admin/', admin.site.urls),
    url(
        r'^todos/$',
        TodoViewSet.as_view({'get': 'list', 'post': 'create'}),
        name='todo-list',
    ),
    url(
        r'^todos/(?P<pk>\d+)/$',
        TodoViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}),
        name='todo-detail',
    )
]
