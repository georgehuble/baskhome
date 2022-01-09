from django.shortcuts import render, get_object_or_404

from cart.cart import Cart
from .forms import ClientForm
from .models import Color, Product, Category, Policy

from cart.forms import CartAddProductForm


def homepage(request):
    form = ClientForm(request.POST)
    cart = Cart(request)
    return render(request, 'shop/index.html', {'form': form,
                                               'cart': cart})


def about(request):
    form = ClientForm(request.POST)
    cart = Cart(request)
    return render(request, 'shop/about.html', {'form': form,
                                               'cart': cart})


def policy(request):
    policy_text = Policy.objects.all()
    form = ClientForm(request.POST)
    return render(request,
                  'shop/policy.html',
                  {'form': form,
                   'policy_text': policy_text})


def product_list(request, color_slug=None):
    color = None
    colors = Color.objects.all()
    categories = Category.objects.all()
    products = Product.objects.filter(available=True)
    form = ClientForm(request.POST)
    cart_product_form = CartAddProductForm()
    cart = Cart(request)
    if color_slug:
        color = get_object_or_404(Color,
                                  slug=color_slug)
        products = products.filter(color=color)
    return render(request, 'shop/catalog.html',
                  {'color': color,
                   'colors': colors,
                   'products': products,
                   'categories': categories,
                   'form': form,
                   'cart_product_form': cart_product_form,
                   'cart': cart})
