let connection;
const handleUserInput = function (stdin) {
  stdin.on('data', (key) => {
    if(key === '\u0003'){
      process.exit();
    }else if (key === 'w'){
      connection.write(`Move: up`);
    }else if (key === 'a'){
      connection.write(`Move: left`);
    }else if (key === 's'){
      connection.write(`Move: right`);
    }else if (key === 'd'){
      connection.write(`Move: down`);
    }
  });

}
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
}
module.exports = {setupInput};