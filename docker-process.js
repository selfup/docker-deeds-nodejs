const shutdown = (server) => {
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    } else {
      process.exit();
    }
  });
};

const dockerSpecificProcessEvents = () => {
  process.on('SIGINT', shutdown);
  process.on('SIGTERM', shutdown);
};

module.exports = dockerSpecificProcessEvents;
