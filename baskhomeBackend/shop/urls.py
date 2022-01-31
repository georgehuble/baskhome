from django.urls import path

from . import service, views

app_name = 'shop'

urlpatterns = [
    path('', views.homepage,
         name='homepage'),
    path('policy/', views.policy, name='policy'),
    path('about/', views.about, name='about'),
    path('delivery/', views.delivery, name='delivery'),
    path('client/', service.add_client, name='add_client'),
    path('list/', views.product_list,
         name='product_list'),
    path('list/<slug:color_slug>/',
         views.product_list,
         name='product_list_by_color'),
]
