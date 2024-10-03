import React, { useState, useEffect, useRef } from 'react';
import '../style/AdminHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faEdit } from '@fortawesome/free-solid-svg-icons'; // Import the edit icon
import logo from './images/tut_logo.png';

const AdminHeader = ({ onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [user, setUser] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem('user_info'));
        setUser(userInfo);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const closeDropdown = () => setIsDropdownOpen(false);

    return (
        <header className="dashboard-header">
            <div className="header-left">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="header-right" ref={dropdownRef}>
                <button 
                    id="profile-button" 
                    onClick={toggleDropdown}
                    className="profile-button"
                >
                    <FontAwesomeIcon icon={faUser} />
                    {user ? `${user.name} ${user.surname}` : 'Admin Name'}
                </button>
                {isDropdownOpen && (
                    <div className="viewing-box">
                        <button 
                                className="edit-button" 
                                onClick={() => { closeDropdown(); /* Add edit functionality here */ }}
                                title="Edit Profile"
                            >
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                        <div className="header">
                            <h3 className="profile-name">{user ? `${user.name} ${user.surname}` : 'Jane Doe'}</h3>
                            
                        </div>
                        <p className="sub-text">{user ? user.email : 'jane@Admin.com'}</p>
                        <p className="sub-text"><strong>{user ? user.department : 'Administrator'}</strong></p>
                        <button className="signout-button" onClick={() => { closeDropdown(); onLogout(); }}>
                            <span className="signout-icon">
                                <FontAwesomeIcon icon={faSignOutAlt} />
                            </span>
                            <span>Sign out</span>
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default AdminHeader;
