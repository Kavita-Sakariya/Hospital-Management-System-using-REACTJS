import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { MdDashboard } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { TbNurse } from "react-icons/tb";
import { FcDepartment } from "react-icons/fc";





export const Sidebar = [
  {
    title: 'Dashboard',
    path: '/Dashboard',
    icon: <MdDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Doctor',
    path: '/',
    icon: <FaUserDoctor />    ,
    cName: 'nav-text'
  },
  {
    title: 'Nurse',
    path: '/',
    icon: <TbNurse />    ,
    cName: 'nav-text'
  },
  {
    title: 'Patient',
    path: '/',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Accountant',
    path: '/',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Department',
    path: '/',
    icon: <FcDepartment />    ,
    cName: 'nav-text'
  }
];
