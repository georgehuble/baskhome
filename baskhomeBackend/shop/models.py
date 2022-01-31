from colorfield.fields import ColorField
from django.db import models
from django.urls import reverse


class Size(models.Model):
    name = models.CharField(max_length=20)

    class Meta:
        ordering = ('name',)
        verbose_name = 'size'
        verbose_name_plural = 'sizes'

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=20)

    class Meta:
        ordering = ('name',)
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name


class Color(models.Model):
    name = models.CharField(max_length=20,
                            db_index=True)
    slug = models.SlugField(max_length=100,
                            unique=True)
    color = ColorField(
        verbose_name=u'Color', max_length=7,
        help_text=u'HEX color, as #RRGGBB',
        blank=True)
    image = models.ImageField(upload_to='images/',
                              blank=True)
    description = models.TextField(max_length='700',
                                   blank=False,
                                   default='')

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
                              on_delete=models.CASCADE,
                              related_name='color_product')
    size = models.ForeignKey(Size,
                             on_delete=models.CASCADE,
                             blank=True)
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
                                decimal_places=0,
                                blank=True,
                                null=True)
    category = models.ForeignKey(Category,
                                 on_delete=models.CASCADE,
                                 blank=True)

    class Meta:
        ordering = ('name', 'price')
        index_together = (('id', 'slug'),)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('shop:product_detail',
                       args=[self.id, self.slug])


class Client(models.Model):
    name = models.CharField(max_length=30,
                            help_text='Ваше имя...')
    number = models.CharField(max_length=30,
                              help_text='+7(9XX)XXX-XX-XX')
    text = models.TextField(max_length=300,
                            help_text='Напишите пожелания...',
                            default='')
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('date',)
        verbose_name = 'client'
        verbose_name_plural = 'clients'

    def __str__(self):
        return f'{self.name}: {self.number}'


class Policy(models.Model):
    name = models.CharField(max_length=30)
    text = models.TextField()

    class Meta:
        ordering = ('id',)
        verbose_name = 'policy'

    def __str__(self):
        return f'{self.name}'
