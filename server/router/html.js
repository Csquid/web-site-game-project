const fs = require('fs');

module.exports = function(router){
    router.get('/',function(req, res) {
        res.render("../html/main.html", {
            clickSubject : "그냥 메인임",
            textEnter : "그냥 메인임"
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