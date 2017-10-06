# Quickstart

This guide is was made to help you to start using this repository. It's only showing the steps to build and run a Ubuntu 16.04 LTS (Xenial) base image, other images in this repository might depend on this or a different base image. You need to build base images first to be able to build derived images.

## Install Docker and Vagrant

To install Docker and Vagrant, type the commands in a terminal emulator. The links are here if you want to read about these tools - recommended, but optional.

- https://www.docker.com/
- https://www.vagrantup.com/

### Linux

Install the packages and start the docker service. The package names and the configuration differ a bit by distribution, but here are a few tips:

- Make sure you're in the *docker* group
- Make sure the docker service is running
- `docker ps` should exit without an error

#### Ubuntu

    sudo apt-get install make docker.io vagrant
    sudo usermod --append --groups docker <username>
    sudo service docker start

#### OPTIONAL configuration

My personal recommendation is not to use AuFS - the default storage driver - or devicemapper. You can read the details [here][storage_drivers].

Use overlay2.

Add the following into `/etc/docker/daemon.json`:

    {
      "storage-driver": "overlay2"
    }

Restart the docker service.

[storage_drivers]: https://docs.docker.com/engine/userguide/storagedriver/selectadriver/

### macOS / OS X

1. Install Homebrew

   https://brew.sh/

       /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Install Cask

   https://caskroom.github.io/

       brew tap caskroom/cask

3. Install Docker

       brew cask install docker

4. Start Docker

   *Start it from the Launchpad.*

5. Install Vagrant

       brew cask install vagrant

## Build a base image and start a container

1. Clone this git repo if you haven't already

       git clone https://github.com/farkasmate/vm.git

2. Build a base image

       cd vm/docker/xenial/base
       make

   To run a quick test you can run:

       make test

   If everything went according to the plan you will find yourself in the container's shell with a prompt like: `root@77a40185ed64:/# `

   Exit the shell by typing `exit`.

3. Start a container with Vagrant

   If you're still in the `vm/docker/xenial/base` directory, type:

       cd ../../..

   Copy the template Vagrantfile.

       cd vagrant
       cp -a TEMPLATE xenial-base

   Create and start the container.

       cd xenial-base
       vagrant up

   SSH into the container.

       vagrant ssh

