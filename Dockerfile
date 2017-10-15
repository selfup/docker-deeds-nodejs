FROM mhart/alpine-node:8

RUN mkdir -p /opt/app

ENV NODE_ENV production

ENV PORT 8080
EXPOSE 8080

WORKDIR /opt
COPY package.json /opt
RUN npm install && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . /opt/app

CMD [ "node", "index.js" ]
