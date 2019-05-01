#!/bin/sh

set -x
# set -e

# sshpass -p $FTP_PASSWORD scp -v -r '_site' blackcogns@ftp.cluster023.hosting.ovh.net:/www/test
cd _site
ncftpput -u blackcogns -p $FTP_PASSWORD -R -v -d ftp.log -m -t 30 -E ftp.cluster023.hosting.ovh.net /www/test *
cat ftp.log
