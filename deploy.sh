#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# deploy to GitHub Pages
git init
git add -A
git commit -m 'deploy'

# deploy to https://<USERNAME>.github.io
git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master:gh-pages

cd -
