#!/bin/ash

echo $CERTBOT_VALIDATION > /etc/letsencrypt/acme-challenge/$CERTBOT_TOKEN

