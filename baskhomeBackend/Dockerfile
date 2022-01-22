FROM python:3.8.5

COPY . /code
WORKDIR /code
COPY req.txt .
RUN pip install -r req.txt
CMD gunicorn baskhomeProject.wsgi:application --bind 0.0.0.0:8000
