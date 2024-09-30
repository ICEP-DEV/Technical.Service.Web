import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './screens/Login';
import AdminChat from './components/AdminChat';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='login' element={<Login />} />
      <Route exact path='/' element={<AdminChat />} />
      </Routes>
    </Router>
  );
}
export default App;
