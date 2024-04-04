const express = require('express');
const mongoose = require('mongoose');
const {collection,patients} = require('./mongo');
const cors= require("cors")
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

app.get("/patient", async (req, res) => {
    patients.find()
    .then(patients => res.json(patients))
    .catch(err => res.json(err))
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


app.listen(8000,()=>{
    console.log("port connected");
})