#!/bin/sh

set -x
set -e

env
pwd
find .

sshpass -p $FTP_PASSWORD scp -v -r '_site/' blackcogns@ftp.cluster023.hosting.ovh.net:/www/test/
