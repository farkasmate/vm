# Ready to use Docker containers and Vagrant templates

If you need some help on how to start, read the [quickstart][] guide.

[quickstart]: ./quickstart.md

## Build Docker containers

    cd docker/xenial/base/
    make

## Test Docker containers

**NOTE**: The container will be removed after exiting the container.

    cd docker/xenial/base/
    make test

## Create new Vagrant machine with Docker provider

    cp -r vagrant/TEMPLATE/ vagrant/hello-world/
    cd vagrant/hello-world/
    vagrant up
    vagrant ssh

