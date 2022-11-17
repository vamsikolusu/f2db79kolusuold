var express = require('express');
const iceCream_controlers= require('../controllers/iceCream'); 
var router = express.Router();

/* GET home page. */

router.get('/', iceCream_controlers.iceCream_view_all_Page );
router.get('/iceCream/:id', iceCream_controlers.iceCream_detail );
/* GET detail iceCream page */ 
router.get('/detail', iceCream_controlers.iceCream_view_one_Page);
/* GET create iceCream page */ 
router.get('/create', iceCream_controlers.iceCream_create_Page);
/* GET create update page */ 
router.get('/update', iceCream_controlers.iceCream_update_Page);
/* GET delete icecream page */ 
router.get('/delete', iceCream_controlers.iceCream_delete_Page); 
module.exports = router;
