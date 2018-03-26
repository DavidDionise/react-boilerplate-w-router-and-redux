FROM ubuntu:xenial

MAINTAINER david.dionise@gmail.com

ENV NODE_ENV production
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | -E bash -
RUN apt-get install -y node
RUN mkdir frontend
COPY ./package.json frontend
COPY ./src frontend
COPY ./server.js frontend
RUN cd src && npm install
RUN cd src && npm run prod

EXPOSE 80

CMD node ./src/server.js
