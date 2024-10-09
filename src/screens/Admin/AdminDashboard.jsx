import Dashboard from './AdminWelcome';
//import LogIssue from './logissueform';
//import Notification from './IssueTracker';
import SideBar from './Navigation/Sidebar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './AdminStyle/admindashboard.css';
import AdminHeader from './Navigation/AdminHeader';
import AddTech from './AddTechnicianPage';
//import IssueDisplay from './IssueDisplay';


const AdminDashboard = () => {
    return (  
       <BrowserRouter >
        <div>
         <AdminHeader /> 
         <SideBar>
            <Routes>
                {/*<Route path="WelcomeStaff" element={<Dashboard />} /> 
                <Route path="logissueform" element={<LogIssue />}/>*/}
                <Route path="AddTechnician" element={<AddTech/>}></Route>
                <Route path="AdminWelcome" element={<Dashboard />}/>
            </Routes>
        </SideBar>
        </div> 
        </BrowserRouter> 
    );
};

export default AdminDashboard;