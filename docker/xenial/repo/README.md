# matefarkas/xenial:repo

Configuration for GPG signed repositories.

## APT

Add the following configuration to **/etc/apt/sources.list.d/repo.list**:

    deb http://<hostname>/apt /

Export your GPG key to **/etc/apt/trusted.gpg.d/repo.gpg**.

