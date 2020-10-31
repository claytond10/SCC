#!/usr/bin/bash

# Run system updates and cleanup

sudo apt update
sudo apt -y upgrade
sudo apt -y autoremove