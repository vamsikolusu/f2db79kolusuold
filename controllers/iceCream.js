var iceCream = require('../models/iceCream'); 
 


// List of all iceCreams 
exports.iceCream_list = async function(req, res) { 
    try{ 
        theiceCreamss = await iceCream.find(); 
        res.send(theiceCreamss); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 

// for a specific iceCream. 
exports.iceCream_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await iceCream.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// VIEWS 
// Handle a show all view 
exports.iceCream_view_all_Page = async function(req, res) { 
    try{ 
        theiceCreams = await iceCream.find(); 
        res.render('iceCream', { title: 'iceCream Search Results', results: theiceCreams }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// List of all iceCreams 
exports.iceCream_delete = async function(req, res) { 
    console.log("delete " + req.params.id)
    try{ 
        
      result = await iceCream.findByIdAndDelete(req.params.id);
      console.log("Remove " + result)
      res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 



// Handle iceCream update form on PUT. 
// exports.iceCream_update_put = function(req, res) { 
//     res.send('NOT IMPLEMENTED: iceCream update PUT' + req.params.id); 
// }; 

// List of all iceCreams 
// exports.iceCream_update_put = async function(req, res) { 
//     try{ 
//         theiceCreams = await iceCream.find(); 
//         res.send(theiceCreams); 
//     } 
//     catch(err){ 
//         res.status(500); 
//         res.send(`{"error": ${err}}`); 
//     }   
// }; 

// Handle iceCream create on POST. 
exports.iceCream_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new iceCream(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"iceCream_type":"goat", "cost":12, "size":"large"} 
    document.icecream_brand = req.body.icecream_brand; 
    document.icecream_flavour = req.body.icecream_flavour; 
    document.calories = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle iceCream update form on PUT. 
exports.iceCream_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await iceCream.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.icecream_brand)toUpdate.icecream_brand = req.body.icecream_brand; 
        if(req.body.icecream_flavour) toUpdate.icecream_flavour = req.body.icecream_flavour; 
        if(req.body.calories) toUpdate.cost = req.body.calories; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

//Handle building the view for updating a iceCream. 
// query provides the id 
exports.iceCream_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await iceCream.findById(req.query.id) 
        res.render('iceCreamupdate', { title: 'iceCream Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.iceCream_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await iceCream.findById(req.query.id) 
        res.render('iceCreamdelete', { title: 'iceCream Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a iceCream. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.iceCream_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('iceCreamcreate', { title: 'iceCream Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a show one view with id specified by query 
exports.iceCream_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await iceCream.findById( req.query.id) 
        res.render('iceCreamdetail',  { title: 'iceCream Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 



