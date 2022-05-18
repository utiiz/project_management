rebuild:
	docker-compose down && docker-compose up -d --build

build:
	docker-compose up -d --build

up:
	docker-compose up -d

down:
	docker-compose down

watch:
	sudo docker-compose up --build
