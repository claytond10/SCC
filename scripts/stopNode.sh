#!/usr/bin/bash

# add to ~/.local/bin
# Stops the node server (all node servers)

kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')