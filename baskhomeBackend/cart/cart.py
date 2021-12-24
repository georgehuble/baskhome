from decimal import Decimal
from django.conf import settings

from shop.models import Price


class Cart(object):
    def __init__(self, request):
        # Инициализация объекта корзины
        self.session = request.session
        cart = self.session.get(settings.CART_SESSION_ID)
        if not cart:
            # Сохраняем в сессии пустую корзину.
            cart = self.session[settings.CART_SESSION_ID] = {}
        self.cart = cart

    def add(self, price, quantity=1, update_quantity=False):
        # """Добавление товара в корзину или обновление его количества."""
        price_id = str(price.id)
        if price_id not in self.cart:
            self.cart[price_id] = {'quantity': 0, 'price': str(price.price)}
        if update_quantity:
            self.cart[price_id]['quantity'] = quantity
        else:
            self.cart[price_id]['quantity'] += quantity
        self.save()

    def save(self):
        # Помечаем сессию как измененную
        self.session.modified = True

    def remove(self, price):
        # Удаление товара из корзины.
        price_id = str(price.id)
        if price_id in self.cart:
            del self.cart[price_id]
            self.save()

    def __iter__(self):
        # Проходим по товарам корзины и получаем соответствующие объекты Product.
        price_ids = self.cart.keys()
        # Получаем объекты модели Product и передаем их в корзину.
        prices = Price.objects.filter(id__in=price_ids)
        cart = self.cart.copy()
        for price in prices:
            cart[str(price.id)]['price'] = price
        for item in cart.values():
            item['total_price'] = item['price'].price * item['quantity']
            yield item

    def __len__(self):
        """Возвращает общее количество товаров в корзине."""
        return sum(item['quantity'] for item in self.cart.values())

    def get_total_price(self):
        return sum(
            item['price'].price * item['quantity']
            for item in self.cart.values())

    def clear(self):
        # Очистка корзины.
        del self.session[settings.CART_SESSION_ID]
        self.save()
