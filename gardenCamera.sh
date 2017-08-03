#!/bin/sh
#/etc/init.d/gardenCamera.sh
export PATH=$PATH:/usr/local/bin
export NODE_PATH=$NODE_PATH:/usr/local/lib/node_modules

case "$1" in
start)
exec forever --sourceDir=/home/pi/Projects/GardenCamera -p /home/pi/Projects/GardenCamera app.js
;;
stop)
exec forever stop --sourceDir=/home/pi/Projects/GardenCamera app.js
;;
*)
echo "Usage: /etc/init.d/gardenCamera.sh {start|stop}"
exit 1
;;
esac
exit 0