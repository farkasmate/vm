# Indeed config

## cron jobs

```
 0 1 * * * /usr/bin/docker-compose -f /home/matefarkas/git/local/vm/compose/indeed/docker-compose.yaml start certbot
10 1 * * * /usr/bin/docker-compose -f /home/matefarkas/git/local/vm/compose/indeed/docker-compose.yaml exec proxy nginx -s reload
```
