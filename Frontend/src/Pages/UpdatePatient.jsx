import React, { useEffect, useState } from 'react';
// import Sidebar from '../Components/SideNavbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useParams} from "react-router-dom";




const UpdatePatient = () => {
    

    const navigate=useNavigate();

    const {p_id} = useParams()
    const[id,setId]=useState('');
    const[name,setName]=useState('');
    const[phone,setPhone]=useState('');
    const[age,setAge]=useState('');
    const[sex,setSex]=useState('');
    const[bloodgroup,setBloodGroup]=useState('');
    const[register,setRegister]=useState('');



  useEffect(() => {
    axios.get("http://localhost:8000/getpatient/"+ p_id)
    .then(patients => {console.log(patients)
                    setId(patients.data.id);
                    setName(patients.data.name);
                    setPhone(patients.data.phone);
                    setAge(patients.data.age);
                    setSex(patients.data.sex);
                    setBloodGroup(patients.data.bloodgroup);
                    setRegister(patients.data.register);
                
    })
    .catch(err=> console.log(err))
  }, []); 

  
    async function Update (e){
        e.preventDefault()

        try {
            await axios.put("http://localhost:8000/updatepatient/"+ p_id,{id,name,phone,age,sex,bloodgroup,register})
              .then(res => { 
                console.log(res)
                  navigate("/patient");
                })
              .catch(e => {
                alert("Wrong details");
                console.log(e);
              });
          } catch (error) {
            console.log(error);
          }
    }
  
  return (
    <div className="form-container">
    <form onSubmit={Update}>
        <h3>Update Patient</h3>
      <label>
        ID:
        <input type="text" name="id" value={id} onChange={(e)=> setId(e.target.value)} />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="text" name="phone" value={phone} onChange={(e)=> setPhone(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="text" name="age" value={age} onChange={(e)=> setAge(e.target.value)} />
      </label>
      <label>
        Sex:
        <input type="text" name="sex" value={sex} onChange={(e)=> setSex(e.target.value)} />
      </label>
      <label>
        Blood Group:
        <input type="text" name="bloodgroup" value={bloodgroup} onChange={(e)=> setBloodGroup(e.target.value)} />
      </label>
      <label>
        New Register:
        <input type="text" name="register" value={register} onChange={(e)=> setRegister(e.target.value)} />
      </label>
      <button>Update</button>
    </form>
    </div>
  );
};

export default UpdatePatient;