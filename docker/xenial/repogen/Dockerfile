FROM ubuntu:16.04
MAINTAINER Mate Farkas <mate.farkas@sch.hu>

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update && apt-get install -y \
  apt-utils

ADD usr/local/bin/generate-apt-metadata /usr/local/bin/generate-apt-metadata
RUN chmod a+x /usr/local/bin/generate-apt-metadata

CMD /usr/local/bin/generate-apt-metadata

