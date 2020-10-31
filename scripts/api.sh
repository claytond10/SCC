#!/usr/bin/bash

# Run as sudo
# Move api directory into html directory
# and set appropriate permissions.

mv ~/api_v2/ /var/www/html/
chmod 550 /var/www/html/api_v2/*
chown -R bobcat:www-data /var/www/html/