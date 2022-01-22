from django.contrib import admin

from .models import Category, Client, Color, Policy, Product, Size


def dublicate_ad(modeladmin, request, queryset):
    for ad in queryset:
        ad.pk = None
        ad.save()


dublicate_ad.short_description = "Дублировать объект"


@admin.register(Size)
class SizeAdmin(admin.ModelAdmin):
    list_display = ['name', ]


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', ]


@admin.register(Color)
class ColorAdmin(admin.ModelAdmin):
    list_display = ['name', ]
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'color', 'size',
                    'slug', 'available',
                    'created', 'updated', 'category']
    list_filter = ['available', 'created',
                   'updated']
    list_editable = ['available']
    prepopulated_fields = {'slug': ('name', 'color', 'size')}
    actions = [dublicate_ad]


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ['name', 'number', 'date']


@admin.register(Policy)
class PolicyAdmin(admin.ModelAdmin):
    list_display = ['name', 'id', ]
