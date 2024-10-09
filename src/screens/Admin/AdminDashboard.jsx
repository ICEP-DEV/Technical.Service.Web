import Dashboard from './WelcomeStaff';
import LogIssue from './logissueform';
import Notification from './IssueTracker';
import SideBar from './Navigation/Sidebar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './StaffStyle/staffdashboard.css';
import StaffHeader from './Navigation/StaffHeader';
import IssueDisplay from './IssueDisplay';


const StaffDashboard = () => {
    return (  
        <div>
         <StaffHeader /> 
         <SideBar>
            <Routes>
                <Route path="WelcomeStaff" element={<Dashboard />} /> 
                <Route path="logissueform" element={<LogIssue />}/>
                <Route path="issueDisplay" element={<IssueDisplay/>}></Route>
                <Route path="issueTracker" element={<Notification />}/>
                <Route path="IssueDisplay/test" element={<div>Test Route</div>} />
            </Routes>
        </SideBar>
        </div> 
    );
};

export default StaffDashboard;