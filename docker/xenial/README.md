# matefarkas/xenial:base

Base image for Vagrant using Ubuntu 16.04 LTS (Xenial Xerus).

## mini-init

The container by default starts with the **/sbin/mini-init** process, which executes binaries located under **/etc/mini-init**.

The binaries are executed in alphabetical order and the boot process is logged in **/var/log/mini-init.log**.

The *last* binary shouldn't exit. Make sure that an **ssh** daemon is running to be able to use the container with **Vagrant**.

Example:

    /etc/mini-init/
      10-disks
      20-networks
      50-services
      99-ssh

