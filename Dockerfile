############################################################
# Dockerfile to build api game of drones game container image
# Based on node image v8.11.2
# By: Santiago Sanchez Taborda
###########################################################

FROM node:8.11.2
MAINTAINER Santiago Sánchez Taborda "santiago.sanchez.t@gmail.com"

# Create working directory
RUN mkdir /usr/src/app \
  && mkdir /src

WORKDIR /usr/src/app

COPY .rpsenv /src/
COPY src /usr/src/app/src
COPY package.json /usr/src/app

# Setup environment
ENV NODE_ENV production

RUN npm install --only=production
# Expose api port
EXPOSE 8888

ENTRYPOINT ["npm", "run", "start"]
