FROM matefarkas/amazonlinux:base
MAINTAINER Mate Farkas <mate.farkas@sch.hu>

RUN rpm -Uvh https://dl.fedoraproject.org/pub/epel/epel-release-latest-6.noarch.rpm
RUN rpm -Uvh https://yum.puppetlabs.com/puppet5/puppet-release-el-6.noarch.rpm

RUN yum install --assumeyes \
  bash-completion \
  git \
  man \
  puppet-agent \
  tig

RUN /opt/puppetlabs/puppet/bin/gem install r10k
RUN ln -s /opt/puppetlabs/puppet/bin/wrapper.sh /opt/puppetlabs/bin/r10k

RUN git clone https://github.com/puppetlabs/puppet-syntax-vim.git /home/vagrant/.vim

RUN echo 'export EDITOR=vim' >> /home/vagrant/.bashrc

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

