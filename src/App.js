import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './screens/Admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Additional routes */}
        <Route path="/AdminDashboard/*" element={<AdminDashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;