const mongoose = require("mongoose") 
const iceCreamSchema = mongoose.Schema({ 
    icecream_brand: {type: String,required: [true, 'Brand of the Ice Cream cannot be empty']}, 
    icecream_flavour: {type: String,required: [true, 'Flavour of the Ice Cream cannot be empty']}, 
    calories: {type: Number,required: [true, 'Calories of the Ice Cream cannot be empty']} 
}) 

 
module.exports = mongoose.model("IceCream", iceCreamSchema) 