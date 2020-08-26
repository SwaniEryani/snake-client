const net = require('net');
const { Server } = require('http');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  conn.on('connect', () => {
    console.log('the connection is successfully established');
    conn.write('Name: SWN');
  });
  
  conn.on('end', () => {
    console.log('you ded cuz you idled');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  return conn;
}
module.exports = connect;