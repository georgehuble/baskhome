from django.shortcuts import render, get_object_or_404

from .forms import ClientForm
from .models import Color, Product

from cart.forms import CartAddProductForm


def homepage(request):
    form = ClientForm(request.POST)
    return render(request, 'shop/index.html', {'form': form})


def product_list(request, color_slug=None):
    color = None
    colors = Color.objects.all()
    products = Product.objects.filter(available=True)
    form = ClientForm(request.POST)
    if color_slug:
        color = get_object_or_404(Color,
                                  slug=color_slug)
        products = products.filter(color=color)
    return render(request, 'shop/catalog.html',
                  {'color': color,
                   'colors': colors,
                   'products': products,
                   'form': form})


def product_detail(request, id, slug):
    product = get_object_or_404(Product, id=id, slug=slug, available=True)
    cart_product_form = CartAddProductForm()
    return render(request, 'shop/trash.html',
                  {'product': product,
                   'cart_product_form': cart_product_form})
