#!/usr/bin/env bash

# cache clean out on branch change script
echo 'Removing node modules'
rm -rf node_modules
# only kill yarn cache if you really need to
echo 'yarn cache clean'
yarn cache clean
echo 'yarn install'
yarn install
# only kill react native cache if you get weird errors deploying
rm -rf ~/.rncache
cd android
echo 'gradle clean'
gradle clean
cd ..
cd ios
echo 'removing build dir'
rm -rf build
echo 'Removing DerivedData'
rm -rf ~/Library/Developer/Xcode/DerivedData/*
echo 'Removing previous build'
rm -rf build
echo 'Removing Pods'
rm -rf Pods
echo 'pod repo update'
pod repo update
echo 'pod install'
pod install
cd ..
#echo 'watchman watch-del-all'
#watchman watch-del-all
#echo 'yarn run jetify'
#yarn run jetify
#echo 'yarn run react-native run-'"${1:-android}"
#yarn run react-native run-"${1:-android}"
