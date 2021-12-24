from django.contrib import admin
from .models import Category, Product, Price


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug',
                    'available',
                    'created', 'updated']
    list_filter = ['available', 'created',
                   'updated']
    list_editable = ['available']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Price)
class PriceAdmin(admin.ModelAdmin):
    list_display = ['name', 'product', 'price', 'slug']
    prepopulated_fields = {'slug': ('name',)}
