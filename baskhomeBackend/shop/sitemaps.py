from django.contrib.sitemaps import Sitemap
from .models import Color


class ColorSitemap(Sitemap):
    changefreq = 'never'
    priority = 0.9

    def items(self):
        return Color.objects.all()

    # def lastmod(self, obj):
    #     return obj.publish
