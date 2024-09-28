import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './screens/Login';

import AdminDashboard from './components/ADMIN/AdminDashboard';
import AddTechnicianPage from './components/ADMIN/AddTechnicianPage';
import TechnicianAdded from './components/ADMIN/TechnicianAdded';

// import ProfileCard from './components/Profile/ProfileCard';

import ManageTechnicians from './components/ADMIN/ManageTechnician';

import EditTechnician from './components/ADMIN/EditTechnician';

import EscalationsAdmin from './components/ADMIN/EscalationsAdmin';


import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />

        <Route exact path='/AdminDashboard' element={<AdminDashboard />} />
        <Route exact path='/AddTechnicianPage' element={<AddTechnicianPage />} />
        <Route exact path='/TechnicianAdded' element={<TechnicianAdded />} />

        {/* <Route exact path='/ProfileCard' element={<ProfileCard />} /> */}

        <Route exact path='/ManageTechnicians' element={<ManageTechnicians />} />

        <Route path="/EditTechnician" element={<EditTechnician />} />

        <Route path="/EscalationsAdmin" element={<EscalationsAdmin />} />


      </Routes>
    </Router>
  );
}
export default App;
