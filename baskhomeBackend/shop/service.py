import requests
from django.shortcuts import redirect

from .forms import ClientForm
from .models import Client


def send_telegram(text: str):
    token = '1496128014:AAGiB6mDQKO-DLGKH7DoEgXntH8hMmpSIbM'
    url = 'https://api.telegram.org/bot'
    channel_id = '@bhcallback'
    url += token
    method = url + '/sendMessage'

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

#
# if __name__ == '__main__':
#     send_telegram(f'Hello')
