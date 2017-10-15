FROM mhart/alpine-node:8

RUN mkdir -p /opt/app

ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080

WORKDIR /opt/app
COPY . /opt/app
RUN npm cache clean --force && npm install

CMD [ "npm", "start" ]
