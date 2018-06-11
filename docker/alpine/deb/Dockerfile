FROM alpine:latest
MAINTAINER Mate Farkas <mate.farkas@sch.hu>

RUN apk add --update-cache \
  dpkg \
  fakeroot \
  tar

CMD fakeroot dpkg-deb --build /build/src/ /build/

