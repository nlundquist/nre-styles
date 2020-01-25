TARGET_VERSION ?= latest

all:

	docker run --name node --rm -v $$(pwd):/src node bash -c "cd /src && npm install && npm run build"
