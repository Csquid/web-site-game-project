const Server = require('./server/modules/HttpServer.js');
const fs = require("fs");
const server = new Server();

server.setHtmlDirection(__dirname + '/client/html/');

server.get('/',function(req,res){
    res.render('main.html');
});

server.get('/:html', (req, res) => {
  fs.statSync('./client/html/html.html');
});

/*server.get('/green', (req,res) => {
  res.send('Wa! Green!');
});*/

server.listen(8080);

console.log(1);