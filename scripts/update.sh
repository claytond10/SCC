#!/usr/bin/bash

# Run system updates and cleanup
# Run with sudo

apt update
apt -y upgrade
apt -y autoremove