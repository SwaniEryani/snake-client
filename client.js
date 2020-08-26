const net          = require('net');
const { Server }   = require('http');
const { IP , PORT, Name} = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('connect', () => {
    console.log('the connection is successfully established');
    conn.write(Name);
  });
    conn.on('end', () => {
      console.log('you ded cuz you idled');
    });
    // interpret incoming data as text
    conn.setEncoding('utf8');

    return conn;
  }
  
module.exports = {connect} ;