var express = require('express');
const iceCream_controlers= require('../controllers/iceCream'); 
var router = express.Router();

/* GET home page. */

router.get('/', iceCream_controlers.iceCream_view_all_Page ); 

router.get('/:id', iceCream_controlers.iceCream_detail ); 
router.put('/:id', iceCream_controlers.iceCream_update_put );
module.exports = router;
