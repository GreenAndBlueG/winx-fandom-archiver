#!/bin/bash

STATIC_API_ROOT=/var/www/archiver.winx.gabg.site/api
echo "true" > $STATIC_API_ROOT/running.txt

docker run --rm --name "winx-fandom-archiver" winx-fandom-archiver 2>> "$STATIC_API_ROOT/log/latest.txt"

xz -zf9vv "$STATIC_API_ROOT/log/latest.txt"
mv "$STATIC_API_ROOT/log/latest.txt.xz" "$STATIC_API_ROOT/log/archive/$(date +%F--%T).txt.xz"

echo "false" > $STATIC_API_ROOT/running.txt
