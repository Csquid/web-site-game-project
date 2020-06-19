const fs = require('fs');

module.exports = function(router){
    router.get('/',function(req, res) {
        let filedirText = new String();
        let files = fs.readdirSync(__dirname + "/../../client/html");
        files.forEach((file) => filedirText += file + "시소님고인물");
        
        res.render("../html/main.html", {
            clickSubject : "html 목록 보기",
            textEnter : filedirText
        });
    });

    router.get('/:html', (req, res) => {
        console.log( __dirname + '/../../client/html/' + req.params.html);
	    if(fs.existsSync(__dirname + '/../../client/html/' + req.params.html)){
		    res.sendFile(req.params.html, { root: __dirname + '/../../client/html/'});
	    } else {
	    	res.render('error.html', {errorCode : 404, subject : "Error!",errorInformation : "DO NOT EXIST THE FILE"});
	    }
    });

    return router;
}