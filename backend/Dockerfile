FROM python:3.8
LABEL maintainer="chrisdev7132@gmail.com"

# Set environment varibles
ENV PYTHONUNBUFFERED 1

ARG DJANGO_ENV=dev
ENV DJANGO_SETTINGS_MODULE backend.settings.${DJANGO_ENV}

COPY ./requirements.txt /code/requirements.txt
RUN pip install --upgrade pip
RUN pip install -r /code/requirements.txt

COPY . /code/

WORKDIR /code/

EXPOSE 8000

RUN python manage.py migrate
CMD exec daphne backend.asgi:application -b 0.0.0.0 -p 8000