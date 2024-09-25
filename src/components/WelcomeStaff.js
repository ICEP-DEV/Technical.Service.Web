import React from 'react';
import './WelcomeStaff.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleCheck, faBell} from '@fortawesome/free-solid-svg-icons';          

const WelcomeStaff = () => {
    return (
        <div className="welcome-container"> 
            <h1 className="title">WELCOME, Staff!</h1> {/* Move the title inside the container */}

            <div className="card-container">
                <div className="card log-issue">
                    <div className="card-icon"><FontAwesomeIcon icon={faCirclePlus}/></div>
                    <div className="card-content">
                        <h2>LOG ISSUE</h2>
                        <p>Report a new technical problem or request assistance with equipment and systems.</p>
                    </div>
                </div>
                <div className="card status">
                    <div className="card-icon"><FontAwesomeIcon icon={faCircleCheck}/></div>
                    <div className="card-content">
                        <h2>STATUS</h2>
                        <p>Check the progress of your reported issues, including pending, ongoing, and resolved cases.</p>
                    </div>
                </div>
                <div className="card notifications">
                    <div className="card-icon"><FontAwesomeIcon icon={faBell}/></div>
                    <div className="card-content">
                        <h2>NOTIFICATIONS</h2>
                        <p>Stay updated with the latest status changes and important alerts related to your issues.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeStaff;
