FROM matefarkas/xenial:base
MAINTAINER Mate Farkas <mate.farkas@sch.hu>

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update && apt-get install -y \
  cloud-init \
  net-tools

ADD etc/mini-init /etc/mini-init

ADD var/lib/cloud/seed/nocloud/meta-data /var/lib/cloud/seed/nocloud/meta-data
ADD var/lib/cloud/seed/nocloud/user-data /var/lib/cloud/seed/nocloud/user-data

EXPOSE 22
CMD /sbin/mini-init

