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

const LoginPage = () => {

  const navigate=useNavigate();

  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  
  return (
    <>
    <form>
  <div className="loginpage"style={background}>
    <div className="content" >
      <h1>LOG IN</h1>
      <label htmlFor="e-mail">E-mail</label>
      <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="yourgmail@gmail.com" name="email" required></input>
      <label htmlFor="password">Password</label>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="******" name="password" required></input>
      <button onClick={()=>navigate("/")}>Login In</button>
      <Link to="/register">Don't have an Account ? Register</Link>
    </div>
  </div>
    </form>
    </>
  )
}


export default LoginPage