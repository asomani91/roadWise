const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt")
const SALT_WORK_FACTOR = 5 ; 
const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  cars:[
    {type:mongoose.Schema.Types.ObjectId,ref:'Cars'}
  ],
  date: { type: Date, default: Date.now }
});
// haseshs password 
userSchema.pre("save",function(next){
  if(!this.isModified('password'))return next();
bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
  if(err) return next(err);
  bcrypt.hash(this.password,salt,function(err,hash){
    if(err)return next(err)
    this.password = hash;
    next();
  })
})
})
const User = mongoose.model("User", userSchema);

module.exports = User;
