# Websocket Testing

## Prerequisites
Please check if `docker` and `docker-compose` is installed on your machine.
This project will use `8000` and `3000` ports so please set `8000` and `3000` ports as free.

## Installation
### Build Docker Image
Run `docker-compose build` on your terminal.
### Run Docker Container
Once the docker image is built, run the container.
Run `docker-compose up -d` on your terminal.

### Initialize Postgres
Run `docker-compose exec backend python manage.py migrate --no-input` on your terminal. (Migrate DB)

## TODO

Need to implement unit & integration testing

### Backend
- Need to run scheduled task to send 'hi' every second. (Celery Redis)
- Need to implement ENV(Secret key, etc)

## Frontend
- Need to implement chart
- Need to implement style sheet.
