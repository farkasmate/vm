# matefarkas/amazonlinux:base

Finally there's an official AmazonLinux image available.

Let's make it work with Vagrant.

## AuFS problems

The original image works, but fails to install essential packages.
Setting the devicemapper driver in */etc/docker/daemon.json* solves the problem.

    {
      "storage-driver": "devicemapper"
    }

