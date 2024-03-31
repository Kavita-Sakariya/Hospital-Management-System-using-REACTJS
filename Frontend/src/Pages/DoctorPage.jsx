import React, { useState } from 'react';
import Navbar from '../components/Navbar';



const DoctorPage = () => {
  
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  
  return (
    <>
  <Navbar></Navbar>
    <div className="doctorpage">
      <h1>Doctor Information</h1>
      <button onClick={toggleForm}>Add Doctor</button>
      <button id="edit">Edit Doctor</button>
      <button id="delete">Delete Doctor</button>
      {showForm && <DoctorForm />}
      <div className="table-container">
      <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Department</th>
            <th>DateOfJoining</th>
            <th>Sex</th>
          </tr>
      </table>
      </div>
    </div>
    </>
  );
};

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    phone: '',
    age: '',
    department: '',
    dateofjoining:'',
    sex: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      id: "",
      name: "",
      phone: "",
      age: "",
      department: "",
      dateofjoining: "",
      sex: "",
    });
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" name="id" value={formData.id} onChange={handleChange} />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="text" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <label>
        Department:
        <input type="text" name="sex" value={formData.sex} onChange={handleChange} />
      </label>
      <label>
        DateOfJoining:
        <input type="text" name="bloodgrp" value={formData.bloodgrp} onChange={handleChange} />
      </label>
      <label>
        Sex:
        <input type="text" name="register" value={formData.register} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default DoctorPage;
