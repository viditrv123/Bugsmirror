var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    first_name:{
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    last_name:{
        type: String,
        required: true,
        trim: true,
        
    },
    rollno:{
        type:String,
        required:true,
        unique: true
    },
    dob:{
        type: String,
    },
    email:{
        type:String,
        required:true
    },
    ph_no:{
        type:String
    },
    maths:{
        type:Number,
        required:true
    },
    science:{
        type:Number,
        required:true
    },
    english:{
        type:Number,
        required:true
    },
    hindi:{
        type:Number,
        required:true
    },
    social_science:{
        type:Number,
        required:true
    }
  },{
      timestamps:true
  });


  module.exports=mongoose.model("User",userSchema);