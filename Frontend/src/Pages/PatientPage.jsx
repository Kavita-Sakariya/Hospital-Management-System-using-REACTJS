import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/SideNavbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const PatientPage = () => {
  
  const [showForm, setShowForm] = useState(false);
  const[patients,setPatients] = useState([]);
  const navigate=useNavigate();
  

  useEffect(() => {
    axios.get("http://localhost:8000/Patient")
    .then(patients => setPatients(patients.data))
    .catch(err=> console.log(err))
  }, []); 

  const handleDelete = (p_id) => {
    axios.delete("http://localhost:8000/deletepatient/" + p_id)
    .then(res=> {console.log(res)
      window.location.reload()
    })
    .catch(err=> console.log(err))
  }

  const toggleForm = () => {
    setShowForm(!showForm);
  };

 
  
  return (
    <>
      <Sidebar/>
    <div className="patientpage">
      <h1>Patient Information</h1>
      <div className="page-button">
      <button onClick={toggleForm}>Add Patient</button>
      {/* <button id="edit">Edit Patient</button>
      <button id="delete">Delete Patient</button> */}
      </div>
      {showForm && <PatientForm />}
      <div className="table-container">
      <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Blood Group</th>
              <th>Register</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
            patients.map(patient => {
              return <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.phone}</td>
              <td>{patient.age}</td>
              <td>{patient.sex}</td>
              <td>{patient.bloodgroup}</td>
              <td>{patient.register}</td>
              <td>
                <button id="edit" onClick={()=>navigate(`/updatepatient/${patient._id}`)}>Update</button>
                <button id="delete" onClick={(e) => handleDelete(patient._id)}>Delete</button>
              </td>
            </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

const PatientForm = () => {

  const navigate=useNavigate();


  const[id,setId]=useState('');
  const[name,setName]=useState('');
  const[phone,setPhone]=useState('');
  const[age,setAge]=useState('');
  const[sex,setSex]=useState('');
  const[bloodgroup,setBloodGroup]=useState('');
  const[register,setRegister]=useState('');

  async function submit(e){
    e.preventDefault();
  
    try {
      await axios.post("http://localhost:8000/patient",{id,name,phone,age,sex,bloodgroup,register})
        .then(res => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if (res.data === "notexist") {
            alert("Patient added successfully");
            setId('');
            setName('');
            setPhone('');
            setAge('');
            setSex('');
            setBloodGroup('');
            setRegister('');
            window.location.reload()
            navigate("/patient");
          }
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
    <form onSubmit={submit}>
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
      <button>submit</button>
    </form>
    </div>
  );
};

export default PatientPage;