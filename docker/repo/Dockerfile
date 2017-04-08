FROM matefarkas/xenial:base
MAINTAINER Mate Farkas <mate.farkas@sch.hu>

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get -y update && apt-get install -y \
  apt-utils \
  nginx

ADD etc/mini-init/10-nginx /etc/mini-init/10-nginx
ADD etc/nginx/sites-available/repo /etc/nginx/sites-available/repo
RUN rm /etc/nginx/sites-enabled/default
RUN ln -s /etc/nginx/sites-available/repo /etc/nginx/sites-enabled/repo

RUN mkdir -p /var/www/repo/apt
RUN chgrp -R www-data /var/www/repo
RUN chmod -R g+w /var/www/repo

ADD usr/local/bin/update-apt-repository /usr/local/bin/update-apt-repository
RUN chgrp www-data /usr/local/bin/update-apt-repository
RUN chmod ug+x /usr/local/bin/update-apt-repository
RUN usermod --append --groups www-data vagrant

EXPOSE 22 80
CMD /sbin/mini-init

