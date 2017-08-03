FROM amazonlinux:2017.03
MAINTAINER Mate Farkas <mate.farkas@sch.hu>

RUN yum install --assumeyes \
  openssh-server \
  sudo \
  vim

ADD etc/environment /etc/environment

RUN useradd -m -s /bin/bash vagrant
ADD home/vagrant/.ssh/authorized_keys /home/vagrant/.ssh/authorized_keys
RUN chmod 0700 /home/vagrant/.ssh/
RUN chmod 0600 /home/vagrant/.ssh/authorized_keys
RUN chown -R vagrant. /home/vagrant/

ADD etc/sudoers.d/vagrant /etc/sudoers.d/vagrant

ADD sbin/mini-init /sbin/mini-init
RUN chmod u+x /sbin/mini-init
ADD etc/mini-init /etc/mini-init

EXPOSE 22
CMD /sbin/mini-init

