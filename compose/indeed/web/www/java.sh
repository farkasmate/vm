#!/bin/bash

wget http://javadl.oracle.com/webapps/download/AutoDL?BundleId=235717_2787e4a523244c269598db4e85c51e0c -O /tmp/jre-8u191-linux-x64.tar.gz
cd /usr/local/
sudo tar xf /tmp/jre-8u191-linux-x64.tar.gz
sudo ln -s /usr/local/jre1.8.0_191/bin/java /usr/local/bin/java

