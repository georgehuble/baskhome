from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from . import views, service

app_name = 'shop'


urlpatterns = [
    path('', views.homepage,
         name='homepage'),
    path('list/', views.product_list,
         name='product_list'),
    path('client/', service.add_client, name='add_client'),
    path('<slug:color_slug>/',
         views.product_list,
         name='product_list_by_color'),
    path('<int:id>/<slug:slug>/',
         views.product_detail,
         name='product_detail'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
