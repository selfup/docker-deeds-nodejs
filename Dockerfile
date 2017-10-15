FROM node:alpine

RUN mkdir -p /opt/app
RUN apk add --no-cache libc6-compat
ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080

WORKDIR /opt/app
COPY . /opt/app
RUN npm cache clean --force && npm install

CMD [ "npm", "start" ]
