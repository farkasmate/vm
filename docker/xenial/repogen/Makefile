TAG='matefarkas/xenial:repogen'

all:
	docker build --tag ${TAG} ${PWD}

test:
	docker run -it --rm --volume ${PWD}/repodir/:/build/ --volume ~/.gnupg/:/root/.gnupg/:ro ${TAG}

