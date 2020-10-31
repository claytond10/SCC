#!/usr/bin/bash

# add to ~/.local/bin
# Move api directory into html directory
# and set appropriate permissions.

sudo mv ~/api_v2/ /var/www/html/
sudo chmod 550 /var/www/html/api_v2/*
sudo chown -R bobcat:www-data /var/www/html/