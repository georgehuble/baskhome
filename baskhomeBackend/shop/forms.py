from django import forms

from .models import Client


class ClientForm(forms.ModelForm):
    class Meta:
        model = Client
        labels = {
            'name': 'Имя',
            'number': 'Телефон'
        }
        fields = labels
        widgets = {
            'name': forms.TextInput(attrs={'placeholder': 'Ваше имя',
                                           'autocomplete': 'off',
                                           'oncontextmenu': 'return false;',
                                           'onCopy': 'return false',
                                           'onDrag': 'return false',
                                           'onDrop': 'return false',
                                           'onPaste': 'return false',
                                           'id': 'nameForm'}),
            'number': forms.TextInput(
                attrs={'placeholder': '+7(9ХХ)ХХХ-ХХ-ХХ',
                       'oncontextmenu': 'return false;',
                       'onCopy': 'return false',
                       'onDrag': 'return false',
                       'onDrop': 'return false',
                       'onPaste': 'return false',
                       'autocomplete': 'off'}),
        }
