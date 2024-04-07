const mongoose=require("mongoose");

const nurseSchema=new mongoose.Schema({
    id: String,
    name: String,
    phone: String,
    age: String,
    department: String,
    sex: String,
    doj:String
})

// const collection= 
module.exports= {
    nurses: mongoose.model("nurses",nurseSchema)
}
