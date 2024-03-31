import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.jsx'
import './index.css'
import HomePage from './Pages/HomePage.jsx'
import LoginPage from './Pages/LoginPage.jsx';
import RegisterPage from './Pages/RegisterPage.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import PatientPage from './Pages/PatientPage.jsx';
import DoctorPage from './Pages/DoctorPage.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },

  {
    path: "/login",
    element: <LoginPage/>,
  },

  {
    path: "/register",
    element: <RegisterPage/>,
  },

  {
    path:"/dashboard",
    element: <Dashboard/>,
  },

  {
    path:"/Patient",
    element: <PatientPage/>,
  },

  {
    path:"/doctor",
    element: <DoctorPage/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
