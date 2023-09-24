const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    namecandidate:{
        type:String
    }, 
    email:{
        type:String,
        
    },
    phone:{
        type:Number
    },
    dob:{
        type:String
    },
    workExp:{
        type:String
    },
    resume:{
        type:String
    },
    location:{
        type:String
    },
    address:{
        type:String
    },
    employer:{
        type:String
    },
    designation:{
        type:String
        
    }
    
});

const User=mongoose.model('User',userSchema);
module.exports=User;