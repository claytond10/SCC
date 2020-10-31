#!/usr/bin/bash

# Stops the node server (all node servers)

kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')