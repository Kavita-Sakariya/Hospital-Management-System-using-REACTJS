const mongoose=require("mongoose");

const patientSchema=new mongoose.Schema({
    id: String,
    name: String,
    phone: String,
    age: String,
    sex: String,
    bloodgroup: String,
    register: String
})

// const collection= 
module.exports= {
    // collection: mongoose.model("collection",newSchema),
    patients: mongoose.model("patients",patientSchema)
}
