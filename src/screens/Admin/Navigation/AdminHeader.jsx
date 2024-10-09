import React, { useState, useEffect, useRef } from 'react';
import '../AdminStyle/AdminHeaderStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import SettingsModal from '../SettingsModal'; // Import the modal
import logo from '../Images/tut.png';
import ProfileIcon from '../Images/profile_icon.png';
const StaffHeader = ({ onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State to handle settings modal
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
                    <img src={ProfileIcon} alt="Profile Icon" />
                    {user ? `${user.name} ${user.surname}` : 'Admin Name'}
                </button>
                {isDropdownOpen && (
                    <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                        <p>{user ? `${user.name} ${user.surname}` : 'Name Surname'}</p>
                        <p className="sub-text">{user ? user.email : 'EzraAdmin.com'}</p>
                        <p className="sub-text">{user ? user.department : 'ICT'}</p>
                        <button onClick={() => { closeDropdown(); /* Navigate to profile */ }}>Profile</button>
                        <button onClick={() => { closeDropdown(); setIsSettingsOpen(true); }}>Settings</button> {/* Open Settings */}
                        <button className="signout-button" onClick={() => { closeDropdown(); onLogout(); }}>
                            <span className="signout-icon">
                                <FontAwesomeIcon icon={faSignOutAlt} />
                            </span>
                            <span>Sign out</span>
                        </button>
                    </div>
                )}
            </div>

            {/* Render the Settings Modal */}
            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
        </header>
    );
};

export default StaffHeader;
