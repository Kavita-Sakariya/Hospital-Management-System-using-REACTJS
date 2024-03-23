import React from 'react';
import { Link } from 'react-router-dom'


const HomePage = () => {
  return (
    <>
    <div className="homepage" style={{textAlign: 'center'}}>
    <h1> "Your Health Our Priority" </h1>
    <div className="heading"> RK HOSPITAL</div>
    <Link to="/login" id="headinglink">Login</Link>
    </div>
    </>
   
  )
}

export default HomePage