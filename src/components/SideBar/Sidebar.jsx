import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './SideBar.css'; // Import the CSS file for styling
import dashboard from './adminIcons/dashIcon.png';
import notifications from '../SideBar/adminIcons/notifIcon.png';
import issueIcon from '../SideBar/adminIcons/issueIcon.png';
import addTechnician from '../SideBar/adminIcons/addIcon.png';
import genetIcon from '../SideBar/adminIcons/generIcon.png';
import logIcon from '../SideBar/adminIcons/logIcon.png';
import dropIcon from '../SideBar/adminIcons/dropicon.png';

const Sidebar = ({ onSelect, isMenuOpen, toggleMenu }) => {
    const [isIssueDropdownOpen, setIssueDropdownOpen] = useState(false); // State to manage the dropdown

    // Toggle dropdown and ensure sidebar is open
    const handleIssueClick = () => {
        setIssueDropdownOpen(prev => !prev); // Toggle the dropdown
        if (!isMenuOpen) {
            toggleMenu(); // Open the sidebar if it's closed
        }
    };

    // Handle option click
    const handleOptionClick = (option) => {
        // Close the dropdown only if the selected option is NOT part of the dropdown options
        const dropdownOptions = ['viewAllLogs', 'logIssue', 'assignTech', 'myIssues'];
        if (!dropdownOptions.includes(option)) {
            setIssueDropdownOpen(false); // Close the dropdown
        }

        onSelect(option); // Execute the callback for the selected option
    };

    return (
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
            <div className="menu-icon" onClick={toggleMenu}>
                <FaBars />
            </div>
            <ul>
                <li onClick={() => handleOptionClick('dashboard')} className='list'>
                    <img src={dashboard} alt="Dashboard" className="sidebar-icon" />
                    {isMenuOpen && <span>DASHBOARD</span>}
                </li>
                <li onClick={() => handleOptionClick('notifications')} className='list'>
                    <img src={notifications} alt="Notifications" className="sidebar-icon" />
                    {isMenuOpen && <span>NOTIFICATIONS</span>}
                </li>

                {/* Issue dropdown */}
                <li onClick={handleIssueClick} className='list'>
                    <img src={issueIcon} alt="issues" className="sidebar-icon" />
                    {isMenuOpen && <span>ISSUES</span>}
                    <img 
                        src={dropIcon} 
                        alt="dropdown arrow" 
                        className={`drop-icon ${isIssueDropdownOpen ? 'rotate' : ''}`} // Apply rotation class conditionally
                    />
                </li>

                {/* Nested dropdown for issues */}
                {isIssueDropdownOpen && (
                    <ul className="dropdown">
                        <li onClick={() => handleOptionClick('viewAllLogs')}>
                            {isMenuOpen && <span>VIEW ALL LOGS</span>}
                        </li>
                        <li onClick={() => handleOptionClick('logIssue')}>
                            {isMenuOpen && <span>LOG ISSUE</span>}
                        </li>
                        <li onClick={() => handleOptionClick('assignTech')}>
                            {isMenuOpen && <span>ASSIGN TECHNICIAN</span>}
                        </li>
                        <li onClick={() => handleOptionClick('myIssues')}>
                            {isMenuOpen && <span>MY ISSUES</span>}
                        </li>
                    </ul>
                )}

                <li onClick={() => handleOptionClick('add-tech')} className='list'>
                    <img src={addTechnician} alt="tech" className="sidebar-icon" />
                    {isMenuOpen && <span>ADD TECHNICIAN</span>}
                </li>
                <li onClick={() => handleOptionClick('report-page')} className='list'>
                    <img src={genetIcon} alt="report" className="sidebar-icon" />
                    {isMenuOpen && <span>GENERATE REPORT</span>}
                </li>
            </ul>
            <div className='log-out'>
                <li onClick={() => handleOptionClick('logout')}>
                    <img src={logIcon} alt="logout" className="" />
                    {isMenuOpen && <span></span>}
                </li>
            </div>
        </div>
    );
};

export default Sidebar;
