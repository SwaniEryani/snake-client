const net = require('net');
const { Server } = require('http');
//const moves = ["Move: down", "Move: up", "Move: left", "Move: right"];
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  conn.on('connect', () => {
    console.log('the connection is successfully established');
    conn.write('Name: SWN');
  });
    // conn.on('connect', () => {
    //   console.log('the connection is successfully established');
    //   conn.write('Name: SWN');
    //   setInterval( () =>{
    //    // let rand = Math.floor(Math.random() * (moves.length + 1));
    //     conn.write(`/*${moves[rand]}*/Move: up `)
    //   }, 50 );

    // });

    // for (let i = 0; i < moves.length; i++) {
    //   setTimeout(() => {
    //     let rand = Math.floor(Math.random() * (moves.length + 1));
    //     conn.write(`${moves[rand]}`);
    //     console.log(`${moves[rand]}`);
    //   }, (i+1) * 50);
    // }


    conn.on('end', () => {
      console.log('you ded cuz you idled');
    });
  
    // interpret incoming data as text
    conn.setEncoding('utf8');

    return conn;
  }
  
module.exports = connect;