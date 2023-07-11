#!/bin/bash

# Into context
cd /var/www/cool/api

docker-compose -f docker-compose.prod.yml up --build -d

rm -rf .git*

docker system prune -a -f