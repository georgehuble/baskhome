from django.contrib import admin
from .models import Product, Color, Price, Client


@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display = ['name', ]
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug',
                    'available', 'color',
                    'created', 'updated']
    list_filter = ['available', 'created',
                   'updated']
    list_editable = ['available']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Price)
class PriceAdmin(admin.ModelAdmin):
    list_display = ['name', 'product', 'price', 'slug']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ['name', 'number', 'date']
