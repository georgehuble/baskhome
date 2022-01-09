from django import forms

PRODUCT_QUANTITY_CHOICES = [(i, str(i)) for i in range(1, 10)]


class CartAddProductForm(forms.Form):
    quantity = forms.IntegerField(min_value=1, max_value=999,
                                  label='',
                                  widget=forms.TextInput(attrs={'type': 'text', 'value': '1',
                                                                'autocomplete': 'off'}))
    update = forms.BooleanField(required=False,
                                initial=False,
                                widget=forms.HiddenInput)
