ARG NODE_VER
FROM node:${NODE_VER}

RUN npm install -g npm
RUN npm install -g @azure/static-web-apps-cli

USER node

WORKDIR /home/node/app

RUN mkdir my-app
COPY --chown=node:node my-app my-app

WORKDIR /home/node/app/my-app
RUN mkdir node_modules
RUN chown node:node -R node_modules

RUN npm install
