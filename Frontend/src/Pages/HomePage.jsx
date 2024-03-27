import React from 'react';
import bg from '../assets/img/blur-hospital.jpg'
import './style.css'
import { Link , useNavigate} from 'react-router-dom'



const background={
  margin: '0',
  backgroundImage:`url(${bg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
}
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
   
    <div className="container" style={background}>
    <h2> "Your Health Our Priority" </h2>
    <div className="heading"><h1>RK HOSPITAL</h1></div>
    <button onClick={()=>navigate("/login")}>Login</button>
    </div>
   
    </>
   
  )
}

export default HomePage