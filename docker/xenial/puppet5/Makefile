TAG='matefarkas/xenial:puppet5'

all:
	docker build --tag ${TAG} ${PWD}

test:
	docker run --interactive --tty --rm ${TAG} bash || true

