const dockerSpecificProcessEvents = (server) => {
  const shutdown = (server) => {
    server.close((err) => {
      if (err) {
        console.error(err);
        process.exitCode = 1;
      }

      process.exit();
    });
  };

  process.on('SIGINT', () => shutdown(server));
  process.on('SIGTERM', () => shutdown(server));
};

module.exports = dockerSpecificProcessEvents;
