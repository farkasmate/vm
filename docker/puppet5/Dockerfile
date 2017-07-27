FROM matefarkas/xenial:base
MAINTAINER Mate Farkas <mate.farkas@sch.hu>

ARG DEBIAN_FRONTEND=noninteractive

RUN wget --quiet https://apt.puppetlabs.com/puppet5-release-xenial.deb -O /tmp/puppet5-release-xenial.deb
RUN dpkg -i /tmp/puppet5-release-xenial.deb

RUN apt-get -y update && apt-get install -y \
  bash-completion \
  git \
  man \
  puppet-agent \
  r10k \
  tig \
  vim-addon-manager \
  vim-puppet

RUN vim-addon-manager --system-wide install puppet

RUN rm -rf /etc/puppetlabs/code
RUN git clone https://github.com/farkasmate/control-repo.git /etc/puppetlabs/code
RUN ln -s /etc/puppetlabs/code /home/vagrant/git
RUN ln -s ../../hooks/post-commit /home/vagrant/git/.git/hooks/post-commit

ADD etc/puppetlabs/r10k/r10k.yaml /etc/puppetlabs/r10k/r10k.yaml
ADD home/vagrant/.gitconfig /home/vagrant/.gitconfig

RUN chown -R vagrant:vagrant /home/vagrant/
RUN chown -R vagrant:vagrant /etc/puppetlabs/code

EXPOSE 22
CMD /sbin/mini-init

