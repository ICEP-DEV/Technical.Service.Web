import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './screens/Login';
import AdminHeader from './components/AdminHeader/AdminHeader';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<AdminHeader />} />
      </Routes>
    </Router>
  );
}
export default App;
