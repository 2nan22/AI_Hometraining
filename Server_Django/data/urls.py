from django.urls import path, include
from . import views

app_name = 'data'

urlpatterns = [
    path('', views.index, name='index'),
    path('main/', views.main, name='main'),
    path('report/', views.report, name='report'),
    path('subscribe/', views.subscribe, name='subscribe'),
    path('cntdown/', views.cntdown, name='cntdown'),
    path('score/', views.score, name='score'),
    path('classes/', views.classes, name='classes'),
    path('services/', views.services, name='services'),
    path('team/', views.team, name='team'),
    path('404/', views.error, name='404'),
    path('loading/', views.loading, name='loading'),
    path('jso/', views.jso),
    path('404_rea/', views.errorr, name='404_rea'),


]
