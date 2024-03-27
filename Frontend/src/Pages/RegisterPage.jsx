import React, { useState } from 'react'
import bg from '../assets/img/blur-hospital.jpg'
import { Link, useNavigate } from 'react-router-dom'


const background={
  margin: '0',
  backgroundImage:`url(${bg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
}

const RegisterPage = () => {

  const navigate=useNavigate();

  const [name, setName]=useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  
  return (
    <>
    <form>
  <div className="Registerpage"style={background}>
    <div className="content" >
      <h1>REGISTER</h1>
      <label htmlFor="name">Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)}type="name" placeholder="your name" name="name" required></input>
          <label htmlFor="e-mail">E-mail</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="yourgmail@gmail.com" name="email" required></input>
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)}type="password" placeholder="******" name="password" required></input>
          <label htmlFor="cpwd"> Confirm Password</label>
          <input type="password" placeholder="******" name="cpwd" required></input>
      <button onClick={()=>navigate("/")}>Register</button>
      <Link to="/login">have an Account ? Login</Link>
    </div>
  </div>
    </form>
    </>
  )
}


export default RegisterPage