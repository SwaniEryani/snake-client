let connection;
const {  userMsg} = require('./constants');
const handleUserInput = function (stdin) {
  stdin.on('data', (key) => {
    if(key === '\u0003'){
      process.exit();
   }
   for( const k in userMsg)
   if (key === k){
    connection.write(userMsg[key])
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