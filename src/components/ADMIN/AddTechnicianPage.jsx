import React, { useState } from 'react';
import './styles/addTechnicianStyles.css';

import addCircle from './images/addCircle.png';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddTechnician = () => {

    const navigate = useNavigate();

    const [password, setPassword] = useState('');

    const handleExit = () => {
        navigate(-1); 
    };

    const submit = () => {

        toast.success('Successfully Added Technician!', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: 'dark',
        });

        navigate('/TechnicianAdded');
    };

    const handleGeneratePassword = () => {
        // Example: Generate a random password (for demonstration)
        setPassword(Math.random().toString(36).slice(2, 10));
    };

    return (
        <div className="container">

            <div className="header">
                <img src={addCircle} alt="Add Technician" className="icon" />
                <h1 className="header-title">Add Technician</h1>
            </div>

            <form>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter full name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="tech@company.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="specialization" className="form-label">Specialization</label>
                    <select id="specialization" className="form-control">
                        <option selected>Computer Repair Technician</option>
                        <option>Network Specialist</option>
                        <option>Hardware Technician</option>
                    </select>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label">Contact</label>
                        <input type="text" className="form-control" id="contact" placeholder="+27 85 999 7754" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Create New Password</label>
                        <div className="password-section">
                            <input type="text" className="form-control" id="password" value={password} readOnly />
                            <button type="button" className="btn-generate btn-success" onClick={handleGeneratePassword}>Generate</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <label htmlFor="availability" className="form-label">Set Availability</label>
                        <div className="availability-section">
                            <span>From:</span>
                            <input type="time" className="form-control" id="fromTime" />
                            <span>To:</span>
                            <input type="time" className="form-control" id="toTime" />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <button type="button" className='btn btn-danger' onClick={handleExit}>CANCEL</button>
                    <button type="button" className='btn btn-success' onClick={submit}>ADD TECHNICIAN</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddTechnician;
