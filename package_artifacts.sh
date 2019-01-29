#!/bin/bash
set -e

working_dir=$1
cd $working_dir

VERSION=`git describe --tags --long`
echo "Packageing version: $VERSION"

if [ -d `eval echo "./artifacts"` ]; then
	rm -rf ./artifacts
fi
mkdir artifacts

cd build
zip -r ../artifacts/opengate-wantage-website-$VERSION.zip ./*
