import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/SideNavbar';
import {useNavigate} from 'react-router-dom';
import  axios  from 'axios';




const NursePage = () => {
  
  const [showForm, setShowForm] = useState(false);
  const[nurses,setNurses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/nurse")
    .then(nurses => setNurses(nurses.data))
    .catch(err=> console.log(err))
  }, []); 

  const handleDelete = (p_id) => {
    axios.delete("http://localhost:8000/deletenurse/" + p_id)
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
    <div className="nursepage">
      <h1>Nurse Information</h1>
      <div className="page-button">
        <button onClick={toggleForm}>Add Nurse</button>
      </div>
      {showForm && <NurseForm />}
      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Department</th>
            <th>Sex</th>
            <th>DateOfJoining</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
            {
            nurses.map(nurse => {
              return <tr key={nurse.id}>
              <td>{nurse.id}</td>
              <td>{nurse.name}</td>
              <td>{nurse.phone}</td>
              <td>{nurse.age}</td>
              <td>{nurse.department}</td>
              <td>{nurse.sex}</td>
              <td>{nurse.doj}</td>
              
              <td>
                <button id="edit" onClick={()=>navigate(`/updatenurse/${nurse._id}`)}>Update</button>
                <button id="delete" onClick={(e) => handleDelete(nurse._id)}>Delete</button>
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

const NurseForm = () => {

  const navigate = useNavigate();


  const[id,setId]=useState('');
  const[name,setName]=useState('');
  const[phone,setPhone]=useState('');
  const[age,setAge]=useState('');
  const[department,setDepartment]=useState('');
  const[sex,setSex]=useState('');
  const[doj,setDoj]=useState('');

async function submit(e){
  e.preventDefault();

  try {
    await axios.post("http://localhost:8000/nurse",{id,name,phone,age,department,sex,doj})
      .then(res => {
        if (res.data === "exist") {
          alert("Nurse already exists");
        } else if (res.data === "notexist") {
          alert("Nurse added successfully");
          setId('');
          setName('');
          setPhone('');
          setAge('');
          setDepartment('');
          setSex('');
          setDoj('');
          window.location.reload()
          navigate("/nurse");
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
        <input type="number" name="id" value={id} min={1} max={50} onChange={(e)=> setId(e.target.value)} required/>
      </label>
      <label>
        Name:
        <input type="text" name="name"  value={name} onChange={(e)=> setName(e.target.value)} required/>
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={phone} pattern="[0-9]{10}" onChange={(e)=> setPhone(e.target.value)} placeholder='98000 98000'required />
      </label>
      <label>
        Age:
        <input type="text" name="age" value={age} onChange={(e)=> setAge(e.target.value)} />
      </label>
      <br/>
      <label>
        Department:
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="Surgical Department">Surgical Department</option>
          <option value="Radiology Department">Radiology Department</option>
          <option value="Gynecology Department">Gynecology Department</option>
          <option value="Neurology Department">Neurology Department</option>
        </select>
      </label>
      <br/>
      <label>
        Gender:
        <select value={sex} onChange={(e) => setSex(e.target.value)} required>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
    </select>
      </label>
      <label>
        DateOfJoining:
        <input type="date" name="doj" value={doj} onChange={(e)=> setDoj(e.target.value)} required/>
      </label>
      <button type="submit">submit</button>
    </form>
    </div>
  );
};

export default NursePage;
