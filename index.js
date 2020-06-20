const Server = require('./server/modules/HttpServer.js');
const requestIp = require("request-ip");
const fs = require("fs");
const server = new Server();

const html = require('./server/router/html.js')
(server.getExpress().Router());
const image = require('./server/router/image.js')
(server.getExpress().Router());
const script = require('./server/router/script.js')
(server.getExpress().Router());

server.setHtmlDirection(__dirname + '/client/html/');

server.use('/html' , html);
server.use('/image' , image);
server.use('/script' , script);
server.use('/static', server.getExpress().static('client'));
//server.use(express.static('public'));

server.get('/',function(req,res){
	res.render('index.html' , {imageSrc : './image/' + ["sky1","sky2","sky3","sky4","sky5","sky6","space1","space2"][Math.random()*8|0] + '.jpg'});
});

server.get("*", (req, res) => {
  res.render('error.html', {errorCode : 404, subject : "Wrong!", errorInformation : "ENTER WRONG PATH!"});
});

server.listen(8080);

console.log(1);