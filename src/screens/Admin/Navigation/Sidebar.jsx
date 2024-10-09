import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import AllIssueIcon from '../Navigation/IconsForStaff/allIssuesIcon.png';
import LogIssueIcon from '../Navigation/IconsForStaff/logIssueIcon.png';
import NotificationIcon from '../Navigation/IconsForStaff/notifications.png';
import Dashboard from '../Navigation/IconsForStaff/dashboard.png';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/WelcomeStaff",
            name: "DASHBOARD",
            icon: <Dashboard />,
        },
        {
            path: "/logissueform",
            name: "LOG ISSUE",
            icon: <LogIssueIcon />,
        },
        {
            path: "/issueDisplay",
            name: "ALL ISSUE",
            icon: <AllIssueIcon />,
        },
        {
            path: "/issueTracker",
            name: "NOTIFICATIONS",
            icon: <NotificationIcon />,
        },
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">Staff</h1>
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