const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/example",{
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true,
    useNewUrlParser: true
}).then(()=>{
    console.log("Connection Succesfull");
}).catch((error)=>{
    console.log(error);
});