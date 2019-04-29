#!/bin/sh

set -x
set -e

bundle exec jekyll build --config _config.yml && htmlproofer ./_site
