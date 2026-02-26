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
      
      
      <aside className="sidebar">
        <h2 className="logo">Admin Panel</h2>

        <ul className="menu">
          <li>Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>

       
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </aside>

     
      <main className="main">
        
        <header className="topbar">
          <div className="user">Muslima</div>
        </header>

        <section className="content">
          <h1>Welcome, Muslima</h1>

          
        </section>

      </main>
    </div>
  );
}

export default Dashboard;