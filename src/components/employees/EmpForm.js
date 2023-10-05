
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios';
import baseURL from '../../api';
import { useNavigate } from "react-router-dom";
import { EmployeeContext } from '../../context/DataProvider'
import { useEffect } from 'react';

export default function EmpForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', address: ''
  })
  const navigate = useNavigate()
  const { selectedData } = useContext(EmployeeContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedData) {
      await axios.put(`${baseURL}/${selectedData.id}`, formData,)
    } else {
      await axios.post(`${baseURL}`, formData,)
    }
    navigate('/')
  }

  useEffect(() => {
    setFormData(selectedData)
  }, [])



  return (
    <div className='formdiv positionfix'>
      <h1 className='textcapitalize' style={{ textAlign: 'center' }}>{!selectedData ? 'Add Employee' : `Update ${formData.name}'s Detail`}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder='Enter Employee Name'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder='Enter Employee Email'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder='Enter Employee Address'
          value={formData.address}
          onChange={handleChange}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={() => navigate('/')}
          >Go Back</button>
          <button
            type="submit"
          >{selectedData ? 'Update Employee' : 'Add Employee'}</button>
        </div>
      </form>
    </div>
  )
}
