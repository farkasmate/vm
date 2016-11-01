TAG='matefarkas/xenial:cloud-init'

all:
	docker build --tag ${TAG} ${PWD}

test:
	docker run --interactive --tty --rm ${TAG} bash || true

