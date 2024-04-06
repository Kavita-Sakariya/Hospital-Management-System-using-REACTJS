const express = require('express');
const mongoose = require('mongoose');
const cors= require("cors");
const { collection } = require('./Models/LoginReg');
const { patients } = require('./Models/Patients');
const { doctors} = require('./Models/Doctors')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

mongoose.connect("mongodb://0.0.0.0:27017/rk-hospital")
.then(()=>{
    console.log("connected");
})
.catch(()=>{
    console.log("failed");
})


app.get("/",cors(),(req, res) => {

})

app.post("/",async (req,res)=>{
    const{email,password}=req.body

    try{
        const check= await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }
    }
    catch(e){
        res.json("not exist")
    }
})

app.post("/register",async(req,res)=>{
    const{name,email,password}=req.body

    const data={
        name:name,
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})





//add patient
app.post('/patient',async(req,res)=>{
    const{id,name,phone,age,sex,bloodgroup,register}=req.body

    const data={
        id: id,
        name: name,
        phone: phone,
        age: age,
        sex: sex,
        bloodgroup: bloodgroup,
        register: register
    }

    try{
        const check=await patients.findOne({id:id})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await patients.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

//Get all patients
app.get("/patient", async (req, res) => {
    patients.find()
    .then(patients => res.json(patients))
    .catch(err => res.json(err))
})

//get single patient
app.get("/getpatient/:p_id", async (req, res) => {
    const p_id = req.params.p_id;
    patients.findById({_id:p_id})
    .then(patients => res.json(patients))
    .catch(err => res.json(err))
})

//update patient
app.put("/updatepatient/:p_id", async (req, res) => {
    const p_id = req.params.p_id;
    patients.findByIdAndUpdate({_id:p_id},{
        id:req.params.id,
        name:req.body.name,
        phone:req.body.phone,
        age:req.body.age,
        sex:req.body.sex,
        bloodgroup:req.body.bloodgroup,
        register:req.body.register})
    .then(patients => res.json(patients))
    .catch(err => res.json(err))
})

//delete patient
app.delete("/deletepatient/:p_id",(req, res) => {
    const p_id = req.params.p_id;
    patients.findByIdAndDelete({_id:p_id})
    .then(patients => res.json(patients))
    .catch(err => res.json(err))
})


//Doctor
//add doctor
app.post('/doctor',async(req,res)=>{
    const{id,name,phone,age,department,sex,doj}=req.body

    const data={
        id: id,
        name: name,
        phone: phone,
        age: age,
        department: department,
        sex: sex,
        doj:doj
    }

    try{
        const check=await doctors.findOne({id:id})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await doctors.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

//Get all doctor
app.get("/doctor", async (req, res) => {
    doctors.find()
    .then(doctors => res.json(doctors))
    .catch(err => res.json(err))
})

//get single doctor
app.get("/getdoctor/:d_id", async (req, res) => {
    const d_id = req.params.d_id;
    doctors.findById({_id:d_id})
    .then(doctors => res.json(doctors))
    .catch(err => res.json(err))
})

//update doctor
app.put("/updatedoctor/:d_id", async (req, res) => {
    const d_id = req.params.d_id;
    doctors.findByIdAndUpdate({_id:d_id},{
        id:req.params.id,
        name:req.body.name,
        phone:req.body.phone,
        age:req.body.age,
        sex:req.body.sex,
        bloodgroup:req.body.bloodgroup,
        register:req.body.register})
    .then(doctors => res.json(doctors))
    .catch(err => res.json(err))
})

//delete patient
app.delete("/deletedoctor/:d_id",(req, res) => {
    const d_id = req.params.d_id;
    doctors.findByIdAndDelete({_id:d_id})
    .then(doctors => res.json(doctors))
    .catch(err => res.json(err))
})




app.listen(8000,()=>{
    console.log("port connected");
})