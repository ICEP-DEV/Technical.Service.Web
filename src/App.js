import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './screens/Staff/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Additional routes */}
        <Route path="/admindashboard/*" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}