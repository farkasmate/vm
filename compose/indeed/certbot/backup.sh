#!/bin/bash

cd $(dirname ${BASH_SOURCE[0]})
sudo tar pczf ./backups/letsencrypt-$(date +%Y-%m-%d).tar.gz ./letsencrypt/
sudo chmod 0600 ./backups/letsencrypt-*.tar.gz

