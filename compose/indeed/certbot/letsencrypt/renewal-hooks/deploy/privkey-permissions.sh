#!/bin/ash

find /etc/letsencrypt/archive/*/privkey*.pem -exec chmod 0600 {} \;

