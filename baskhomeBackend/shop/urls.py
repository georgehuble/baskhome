from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views, service

app_name = 'shop'


urlpatterns = [
    path('', views.homepage,
         name='homepage'),
    path('policy/', views.policy, name='policy'),
    path('about/', views.about, name='about'),
    path('client/', service.add_client, name='add_client'),
    path('list/', views.product_list,
         name='product_list'),
    path('list/<slug:color_slug>/',
         views.product_list,
         name='product_list_by_color'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
