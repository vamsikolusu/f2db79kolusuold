
var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var iceCream_controller = require('../controllers/iceCream'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a iceCream.  
router.post('/iceCreams', iceCream_controller.iceCream_create_post); 
 
// DELETE request to delete iceCream. 
router.delete('/iceCreams/:id', iceCream_controller.iceCream_delete); 
 
// PUT request to update iceCream. 
router.put('/iceCreams/:id', iceCream_controller.iceCream_update_put); 
 
// GET request for one iceCream. 
router.get('/iceCreams/:id', iceCream_controller.iceCream_detail); 
 
// GET request for list of all iceCream items. 
router.get('/iceCreams', iceCream_controller.iceCream_list); 
 
// router.get('/iceCreams/:id', iceCream_controller.costume_detail); 

module.exports = router;