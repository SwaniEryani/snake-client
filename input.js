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
    }else if (key ==='y'){
      connection.write("Say: Yaayh")
    }else if (key ==='g'){
      connection.write("Say: got it")
    }else if (key ==='c'){
      connection.write("Say: can't see you")
    }
  });
  connection.on('end', () => {
    console.log('you ded cuz you idled');
  });
  connection.on('error', () => {
    console.log('try again');
    process.exit();
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