TAG='matefarkas/alpine:deb'

all:
	docker build --tag ${TAG} ${PWD}

test:
	docker run --interactive --tty --rm ${TAG} ash || true

package:
	docker run --rm --volume ${PWD}:/build/ ${TAG}

