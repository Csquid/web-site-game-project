const fs = require('fs');

module.exports = function(router){
    router.get('/',function(req,res){
        let plusEnterText = new String();
        let files = fs.readdirSync(__dirname + "/../../client/image");
        files.forEach((file) => plusEnterText += file + "시소님고인물");
        
        res.render("../html/main.html", {
            clickSubject : "이미지 목록 보기",
            textEnter : plusEnterText
        });
    });

    router.get('/:image', (req, res) => {
	    if(fs.existsSync(__dirname + '/../../client/image/' + req.params.image)){
		    res.sendFile(req.params.image, { root: __dirname + '/../../client/image/'});
	    } else {
	    	res.render('error.html', {errorCode : 404, subject : "Error!",errorInformation : "CAN NOT FIND THIS PATH IMAGE!"});
	    }
    });


    return router;
}