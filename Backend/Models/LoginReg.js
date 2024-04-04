const mongoose=require("mongoose");

const newSchema=new mongoose.Schema({
    email:{
        type: "string",
        required: true
    },
    password:{
        type: "string",
        required: true
    },
    name:{
        type: "string",
        required: true
    }
});

module.exports= {
    collection: mongoose.model("collection",newSchema)
}