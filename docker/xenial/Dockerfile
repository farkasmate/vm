FROM ubuntu:16.04
MAINTAINER Mate Farkas <mate.farkas@sch.hu>

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update && apt-get install -y \
  openssh-server \
  sudo \
  vim

RUN useradd -m -s /bin/bash vagrant
ADD home/vagrant/.ssh/authorized_keys /home/vagrant/.ssh/authorized_keys
RUN chmod 0700 /home/vagrant/.ssh/
RUN chown -R vagrant. /home/vagrant/

ADD etc/sudoers.d/vagrant /etc/sudoers.d/vagrant

ADD sbin/mini-init /sbin/mini-init
RUN chmod u+x /sbin/mini-init
ADD etc/mini-init /etc/mini-init

EXPOSE 22
CMD /sbin/mini-init

