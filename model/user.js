const mongoose= require('mongoose');

const user = mongoose.Schema({
    username:{
  type:String,
  required:[true ,'user con not black ']
    },
    password:{
        type:String,
        required:[true ,'password con not black ']
          }
})

module.exports = mongoose.model("User",user);