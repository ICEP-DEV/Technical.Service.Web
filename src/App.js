import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Sidebar from "./components/SideBar/Sidebar";
import DashboardPage from "./components/SideBar/pages/DashboardPage";
import AddTechPage from "./components/SideBar/pages/AddTechPage";
import NotificationsPage from "./components/SideBar/NotificationsPage";
import ViewAllLogs from "./components/SideBar/pages/ViewAllLogs";
import ReportPage from "./components/SideBar/pages/ReportPage";
import LogIssue from "./components/SideBar/pages/LogIssue";
import AssignTech from "./components/SideBar/pages/AssignTech";
import MyIssues from "./components/SideBar/pages//MyIssues";
import "./style/style.css"; // Main app styling

const AppContent = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelect = (page) => {
    navigate(`/${page}`);
  };

  const handleViewClick = () => {
    navigate("/issue-details");
  };

  const handleClose = () => {
    navigate("/all-issues");
  };

  return (
    <div className={`app-container ${isMenuOpen ? "menu-open" : ""}`}>
      <Sidebar
        onSelect={handleSelect}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      <div className="main-content">
        <Routes>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/viewAllLogs" element={<ViewAllLogs />} />
          <Route path="/logIssue" element={<LogIssue />} />
          <Route path="/assignTech" element={<AssignTech />} />
          <Route path="/myIssues" element={<MyIssues />} />
          <Route
            path="/add-tech"
            element={<AddTechPage onViewClick={handleViewClick} />}
          />
          <Route path="/report-page" element={<ReportPage />} />
          <Route path="/" element={<DashboardPage onClose={handleClose} />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
