import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h1>dashboard</h1>
  
    </div>
  );
}

export default Dashboard;