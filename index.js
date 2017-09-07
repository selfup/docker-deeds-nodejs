const express = require('express');
const morgan = require('morgan');

const dockerSpecificProcessEvents = require('./index-docker-process');

// docker defines the port in the dockerfile, no need to have a fallback
const PORT = process.env.PORT;
const app = express();

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Hello World\n');
});

const server = app.listen(PORT, () => {
  console.log('Running on port', PORT);
});

// handle SIGTERM and SIGINT
dockerSpecificProcessEvents(server);