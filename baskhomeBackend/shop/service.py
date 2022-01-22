import os

import requests
from django.shortcuts import redirect
from dotenv import load_dotenv

from .forms import ClientForm
from .models import Client

load_dotenv()


def send_telegram(text: str):
    token = os.getenv('TOKEN_TELEGRAM')
    url = 'https://api.telegram.org/bot'
    channel_id = os.getenv('CHANEL_TELEGRAM')
    url += token
    method = url + '/sendMessage'
    f'https://api.telegram.org/bot/{token}/sendMessage/'
    r = requests.post(method, data={
        'chat_id': channel_id,
        'text': text,
    })
    if r.status_code != 200:
        raise Exception('post_text error')


def add_client(request):
    form = ClientForm(request.POST)
    if form.is_valid():
        client = form.save(commit=False)
        client.save()
    text = Client.objects.latest('date')
    send_telegram(f'{text}')
    return redirect('/')
