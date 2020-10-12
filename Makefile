DOCKERCOMPOSE_DEV=-f docker-compose.dev.yml


.PHONY: build_dev_image
build_dev_image:
	docker build -f ./docker/spooky-node/DockerfileDev -t spookybot:dev .

.PHONY: startup_dev
startup_dev:
	docker-compose ${DOCKERCOMPOSE_DEV} up -d

.PHONY: stop_dev
stop_dev:
	docker-compose ${DOCKERCOMPOSE_DEV} down -v
