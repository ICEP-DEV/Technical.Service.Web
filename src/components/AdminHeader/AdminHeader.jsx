import React, { useState, useEffect, useRef } from 'react';
import '../ADMIN/styles/adminHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faEdit } from '@fortawesome/free-solid-svg-icons'; // Removed faUser since we'll use the profile image
import EditProfileModal from './EditProfileModal';
import logo from '../ADMIN/images/tut_logo.png';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AdminHeader = ({ onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
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

    // Function to update user info after editing
    const handleUpdateUser = (updatedUser) => {
        setUser(updatedUser);
        localStorage.setItem('user_info', JSON.stringify(updatedUser));
    };

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
                    {user?.profileImage ? (
                        <img src={user.profileImage} alt="Profile" className="profile-icon" height={30}/>
                    ) : (
                        <FontAwesomeIcon icon={faUser} />
                    )}
                    {user ? `${user.name} ${user.surname}` : 'Admin Name'}
                </button>
                {isDropdownOpen && (
                    <div className="viewing-box">
                        <button 
                            className="edit-button" 
                            onClick={() => { closeDropdown(); setIsModalOpen(true); }}
                            title="Edit Profile"
                        >
                            <FontAwesomeIcon icon={faEdit} height={30}/>
                        </button>
                        <div className="header">
                            <h3 className="profile-name">{user ? `${user.name} ${user.surname}` : 'Jane Doe'}</h3>
                        </div>
                        <p className="sub-text">{user ? user.email : 'jane@Admin.com'}</p>
                        <p className="sub-text"><strong>{user ? user.role : 'Administrator'}</strong></p>
                        <button className="signout-button" onClick={() => { closeDropdown(); onLogout(); }}>
                            <span className="signout-icon">
                                <FontAwesomeIcon icon={faSignOutAlt} />
                            </span>
                            <span>Sign out</span>
                        </button>
                    </div>
                )}
            </div>
            {/* Render the modal */}
            <EditProfileModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                user={user}
                onSave={handleUpdateUser} 
            />
        </header>
    );
};

export default AdminHeader;
