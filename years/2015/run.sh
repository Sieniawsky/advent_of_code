#!/usr/bin/env bash

set -e
DAY=$1
echo "Running 2015 day $DAY"
npm exec tsx run.ts $DAY
