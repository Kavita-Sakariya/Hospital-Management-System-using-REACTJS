import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/SideNavbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const PatientPage = () => {
  
  const [showForm, setShowForm] = useState(false);
  const[patients,setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/Patient")
    .then(patients => setPatients(patients.data))
    .catch(err=> console.log(err))
  }, []); 

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
      <button id="edit">Edit Patient</button>
      <button id="delete">Delete Patient</button>
      </div>
      {showForm && <PatientForm setShowForm={setShowForm} />} 
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
            </tr>
            }
              
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

const PatientForm = ({  setShowForm }) => {

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
        const res = await axios.post("http://localhost:8000/patient", {id, name, phone, age, sex, bloodgroup, register});
        
        if(res.data === "exist") {
            alert("User already exists");
        } else if(res.data === "notexist") {
            // If the submission is successful and the user does not exist, navigate to the patient page
            navigate("/patient");
            // Clear the form inputs
            setId('');
            setName('');
            setPhone('');
            setAge('');
            setSex('');
            setBloodGroup('');
            setRegister('');
            // Close the form
            setShowForm(false);
        }
    } catch (error) {
        // Handle errors
        if (error.response) {
            // Server responded with an error status code
            alert("Wrong details");
        } else {
            // Something else went wrong (e.g., network error)
            alert("Error submitting form");
            console.error(error);
        }
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
        Register:
        <input type="text" name="register" value={register} onChange={(e)=> setRegister(e.target.value)} />
      </label>
      <button>submit</button>
    </form>
    </div>
  );
};

export default PatientPage;
