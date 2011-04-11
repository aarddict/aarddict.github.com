#!/bin/sh
apt-ftparchive packages dists/fremantle-1.2/user/binary-armel/ > dists/fremantle-1.2/user/binary-armel/Packages
gzip -f dists/fremantle-1.2/user/binary-armel/Packages

