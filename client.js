const net = require('net');
const { Server } = require('http');
const { IP , PORT } = require('./constants');
//const moves = ["Move: down", "Move: up", "Move: left", "Move: right"];
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


    
  
    // interpret incoming data as text
    conn.setEncoding('utf8');

    return conn;
  }
  
module.exports = connect;