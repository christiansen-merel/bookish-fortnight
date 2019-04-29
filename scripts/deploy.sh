#!/bin/sh

set -x
set -e

env
pwd

echo sshpass -p $FTP_PASSWORD scp _site/* blackcogns@ftp.cluster023.hosting.ovh.net:/www/test/
