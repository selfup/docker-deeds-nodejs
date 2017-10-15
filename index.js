const express = require('express');
const morgan = require('morgan');

const dockerSpecificProcessEvents = require('./docker-process');

// docker defines the port in the dockerfile, no need to have a fallback
const PORT = process.env.PORT;
const app = express();

(process.env.NODE_ENV === 'production')
  ? app.use(morgan('tiny'))
  : app.use(morgan('common'));

app.get('/', (req, res) => {
  res.send('Hello World\n');
});

const server = app.listen(PORT, () => {
  console.log('Running on port', PORT);
});

// handle SIGTERM and SIGINT
dockerSpecificProcessEvents(server);
