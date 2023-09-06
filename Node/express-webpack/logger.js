import winston from 'winston';
import Graylog2 from 'winston-graylog2';

const logger = winston.createLogger({
  transports: [
    new Graylog2({
      name: 'Graylog', 
      level: 'debug', 
      silent: false, 
      handleExceptions: true, 
      graylog: {
        servers: [{ host: 'localhost', port: 12201 }],
        facility: 'Express',
        bufferSize: 1400
      }
    })
  ]
});

export default logger;
