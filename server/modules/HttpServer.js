class Server {
    constructor(port) {
        this.port =      port || process.env.port;
        this.session = require('express-session');
        this.express =         require('express');
        this.bodyParser =  require('body-parser');
        this.http =               require('http');
        this.app =                 this.express();
        
        this.app                .set('view engine', 'ejs');
        this.app.engine('html', require('ejs').renderFile);
        this.app       .use(this.express.static('public'));
        this.app              .use(this.bodyParser.json());
        this.app        .use(this.bodyParser.urlencoded());
        
        this.app.use(this.session({
            secret: '@#@$MYSIGN#@$#$', resave: false, saveUninitialized: true
        }));

        this.server = this.http.createServer(this.app);
    }

    get(dir,func) {
        this.app.get(dir,func);
    }

    post(dir,func) {
        this.app.post(dir,func);
    }

    setPort(port) {
        this.port = port;
    }

    setHtmlDirection(dir) {
        this.app.set('views', dir);
    }

    listen(port) {
        this.setPort(port || this.port);

        this.server.listen(this.port);
    }
}

module.exports = Server;


