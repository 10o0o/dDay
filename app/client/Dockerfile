FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

# apt-get build-dep package enable
RUN sed -Ei 's/^# deb-src /deb-src /' /etc/apt/sources.list

# Timezone
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# basic
RUN apt-get update \
  && apt-get install -y \
  curl \
  language-pack-ko

# sudo
RUN apt-get install -y sudo
RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

# node
RUN curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash - \
  && apt-get install -y nodejs

# yarn
# RUN sudo npm i -g node-gyp 
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list \
  && apt-get update \
  && apt-get install yarn

RUN sudo apt update
RUN sudo apt install -y git