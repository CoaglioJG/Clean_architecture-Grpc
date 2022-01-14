FROM node:14.15.4-alpine3.12

USER root

RUN npm install -g @nestjs/cli

WORKDIR /var/www/html

COPY . /var/www/html/

RUN yarn add @nestjs/typeorm typeorm mariadb && yarn add @nestjs/config

RUN yarn install && yarn build

ENTRYPOINT ["/bin/sh", "-c" , "yarn start:dev"]
