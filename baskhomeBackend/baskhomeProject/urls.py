from django.contrib import admin
from django.contrib.sitemaps.views import sitemap
from django.urls import include, path

from shop.sitemaps import ColorSitemap

sitemaps = {
    'colors': ColorSitemap,
}

urlpatterns = [
    path('sitemap.xml/', sitemap, {'sitemaps': sitemaps},
         name='django.contrib.sitemaps.views.sitemap'),
    path('robots.txt/', include('robots.urls')),
    path('admin/', admin.site.urls),
    path('cart/', include('cart.urls', namespace='cart')),
    path('', include('shop.urls', namespace='shop')),
]
