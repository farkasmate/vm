#!/bin/bash

# Change git user settings
sed -i -e 's/name = Vagrant.*$/name = Mate Farkas/' -e 's/email = vagrant@puppet5.*$/email = mate.farkas@sch.hu/' /home/vagrant/.gitconfig

# Change git origin URL
sed -i 's/url = https:\/\/github.com\/farkasmate\/control-repo.git.*$/url = git@github.com:farkasmate\/control-repo.git/' /home/vagrant/git/.git/config

