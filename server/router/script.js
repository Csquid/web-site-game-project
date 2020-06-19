const fs = require('fs');

module.exports = function(router){
    router.get('/',function(req,res){
        res.render("../html/main.html", {
            clickSubject : "그냥 스크립트임",
            textEnter : "그냥 스크립트임"
        });
    });

    router.get('/:script', (req, res) => {
	    if(fs.existsSync(__dirname + '/../../client/script/' + req.params.script)){
		    res.sendFile(req.params.script, { root:__dirname + '/../../client/image/'});
	    } else {
	    	res.render('error.html', {errorCode : 404, subject : "Error!",errorInformation : "DO NOT EXIST THE FILE"});
	    }
    });

    router.get('image/:script', (req, res) => {
	    if(fs.existsSync('../../client/script/image/' + req.params.script)){
		    res.sendFile(req.params.script, { root: __dirname + '../../client/script/image/'});
	    } else {
	    	res.render('error.html', {errorCode : 404, subject : "Error!",errorInformation : "DO NOT EXIST THE FILE"});
	    }
    });


    return router;
}