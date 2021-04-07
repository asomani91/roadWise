const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema  = new Schema({
    make:{type:String,required:true},
    model:{type:String,required:true},
    year:{type:Number,required:true},
    user:{type:mongoose.Schema.Types.ObjectId,
    ref:'User'
}

})

const Car = mongoose.model("Car", carSchema);

module.exports = Car;