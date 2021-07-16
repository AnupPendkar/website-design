const mongoosse = require("mongoose");
const validator = require("validator");


const userSchema = mongoosse.Schema({
    name:{
        type:String,
        minLength:3,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        min:10
    },
    message:{
        type:String,
        minLength:5,
        required:true
    }
})

const User = mongoosse.model("User", userSchema);
module.exports = User;