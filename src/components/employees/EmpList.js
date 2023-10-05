import React, { useEffect, useState } from 'react'
import baseURL from '../../api';
import NoData from '../NoData';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { EmployeeContext } from '../../context/DataProvider';

export default function EmpList() {
    const [isLoadingdIn, setIsLoadingdIn] = useState(true);
    const [empData, setEmpData] = useState([]);

    const navigate = useNavigate()

    const { setSelectedData } = useContext(EmployeeContext)

    async function FetchEmp() {
        try {
            await fetch(baseURL).then(res => { return res.json() })
                .then(data => {
                    setEmpData(data)
                    setIsLoadingdIn(false)
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    const hndlClick = () => {
        setSelectedData('')
        navigate('/EmpForm');
    }

    useEffect(() => {
        FetchEmp()
    }, [])

    const handleEdit = (items) => {
        setSelectedData(items)
        navigate('/EmpForm')
    };

    const handleDelete = async (id) => {
        await axios.delete(`${baseURL}/${id}`);
        FetchEmp();
    };

    return (
        <>
            <h1 style={{ cursor: 'pointer' }} onClick={hndlClick}>Add New  Emp</h1>
            {isLoadingdIn ? (
                <NoData heading="No Employee Found" />
            ) : (
                <table className='emplisttable' style={{ width: '100%' }}>
                    <thead>
                        <tr>
                            <th align='left'>Name</th>
                            <th align='left'>Email</th>
                            <th align='left'>Address</th>
                            <th align='center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empData.map((items, index) => {
                            return (
                                <tr key={index}>
                                    <td>{items.name}</td>
                                    <td>{items.email}</td>
                                    <td>{items.address}</td>
                                    <td align='center'>
                                        <button
                                            className='btn btnblue textwhite'
                                            onClick={() => handleEdit(items)}
                                        >Edit</button>
                                        <button
                                            className='btn btndanger textwhite'
                                            style={{ marginLeft: '5px' }}
                                            onClick={() => handleDelete(items.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </>
    )
}