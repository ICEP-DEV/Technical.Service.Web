import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Dashboard from './Icons/dashboard.png';
import ViewAllLogs from './Icons/allIssuesIcon.png'
import AsignTechnician from './Icons/notifications.png'
import AddTechnician from './Icons/addtechnician.png';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/AdminWelcome",
            name: "DASHBOARD",
            icon: <img src={Dashboard} alt="Dashboard Icon" />,
        },
        {
            path: "/AddTechnician",
            name: "ADD TECHNICIAN",
            icon: <img src={AddTechnician} alt="Add Technician Icon" />,
        },
        {
            path: "/issueDisplay",
            name: "ALL ISSUE",
            icon: <img src={ViewAllLogs} alt="Dashboard Icon" />,
        },
        {
            path: "/issueTracker",
            name: "NOTIFICATIONS",
            icon: <img src={AsignTechnician} alt="Dashboard Icon" />,
        },
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">Admin</h1>
                    <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className={({ isActive }) => (isActive ? 'link active' : 'link')} // Updated to use className as a function
                    >
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;