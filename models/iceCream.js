const mongoose = require("mongoose") 
const iceCreamSchema = mongoose.Schema({ 
    icecream_brand: String, 
    icecream_flavour: String, 
    calories: Number 
}) 

 
module.exports = mongoose.model("IceCream", iceCreamSchema) 