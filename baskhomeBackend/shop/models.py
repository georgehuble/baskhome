from django.db import models
from django.urls import reverse


class Category(models.Model):
    name = models.CharField(max_length=20,
                            db_index=True)
    slug = models.SlugField(max_length=100,
                            unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('shop:product_list_by_category',
                       args=[self.slug])


class Product(models.Model):
    category = models.ForeignKey(Category,
                                 related_name='products',
                                 on_delete=models.CASCADE)
    name = models.CharField(max_length=20,
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
