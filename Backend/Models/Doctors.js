const mongoose=require("mongoose");

const doctorSchema=new mongoose.Schema({
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
    doctors: mongoose.model("doctors",doctorSchema)
}
