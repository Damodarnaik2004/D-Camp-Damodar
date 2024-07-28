const mongoose = require('mongoose');
const pLm = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    }
});

UserSchema.plugin(pLm);
module.exports= mongoose.model('User',UserSchema);



// const UserSchema = new Schema({
//     email: {
//       type: String,
//       required: true,
//       unique: true
//     },
//     username: String,
//     hash: String,   //this will be passowrd
//     salt: String
//   });
  
//   UserSchema.plugin(pLm);