#!/bin/zsh

./bin/htmltest site | grep "target does not exist" | awk '{ print $9 }' | sort | uniq > broken_links.txt
