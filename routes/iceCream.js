var express = require('express');
const iceCream_controlers= require('../controllers/iceCream'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

/* GET home page. */

router.get('/', iceCream_controlers.iceCream_view_all_Page );
router.get('/iceCream/:id', iceCream_controlers.iceCream_detail );
/* GET detail iceCream page */ 
router.get('/detail', iceCream_controlers.iceCream_view_one_Page);
/* GET create iceCream page */ 
router.get('/create', iceCream_controlers.iceCream_create_Page);
/* GET create update page */ 
router.get('/update',secured, iceCream_controlers.iceCream_update_Page);
/* GET delete icecream page */ 
router.get('/delete', iceCream_controlers.iceCream_delete_Page); 
module.exports = router;
