let express = require('express');
let router = express.Router();

// GET games index page
router.get('/', function(req, res, next){
	res.render('games/index');
});

// make public
module.exports = router;
