#!/usr/bin/env sh

set -e

# yarn docs:build

cd dist

echo 'docs.melodot.io' > CNAME

git init

git add -A

git commit -m 'deploy'

git push -f git@github.com:ZeroDAO/melodot-docs.git master:gh-pages

cd -