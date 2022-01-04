from django.db import models
from django.urls import reverse


class Color(models.Model):
    name = models.CharField(max_length=20,
                            db_index=True)

    slug = models.SlugField(max_length=100,
                            unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'color'
        verbose_name_plural = 'colors'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('shop:product_list_by_color',
                       args=[self.slug])


class Product(models.Model):
    color = models.ForeignKey(Color,
                              on_delete=models.CASCADE)
    name = models.CharField(max_length=60,
                            db_index=True)
    image = models.ImageField(upload_to='images/',
                              blank=False)
    description = models.TextField(max_length='300',
                                   blank=False)
    slug = models.SlugField(max_length=100,
                            db_index=True)
    available = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    price = models.DecimalField(max_digits=10,
                                decimal_places=0)

    class Meta:
        ordering = ('name',)
        index_together = (('id', 'slug'),)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('shop:product_detail',
                       args=[self.id, self.slug])


class Price(models.Model):
    product = models.ForeignKey(Product,
                                on_delete=models.CASCADE,
                                related_name='prices')
    name = models.CharField(max_length=20,
                            db_index=True)
    price = models.DecimalField(max_digits=10,
                                decimal_places=0)
    slug = models.SlugField(max_length=100,
                            db_index=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'price'
        verbose_name_plural = 'prices'

    def __str__(self):
        return f'{self.price}'

    def get_absolute_url(self):
        return reverse('shop:price_detail',
                       args=[self.slug])


class Client(models.Model):
    name = models.CharField(max_length=30, help_text='Ваше имя...')
    number = models.CharField(max_length=30, help_text='+7(9XX)XXX-XX-XX')
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('date',)
        verbose_name = 'client'
        verbose_name_plural = 'clients'

    def __str__(self):
        return f'{self.name}: {self.number}'
