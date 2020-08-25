
const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.on('connect', () => {
    conn.write('Hello from client!');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  return conn;
}

console.log('Connecting ...');
connect();
