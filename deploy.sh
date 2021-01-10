#!/bin/sh

if [ $# -eq 0 ]; then
    message='...'
else message=$1
fi

git add -A
git commit -m "$message"
git push

npm run deploy