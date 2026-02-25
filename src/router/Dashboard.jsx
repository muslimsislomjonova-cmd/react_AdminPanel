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

          <div className="cards">
            <div className="card">
              <h3>Users</h3>
              <p>120 Active users</p>
            </div>

            <div className="card">
              <h3>Settings</h3>
              <p>System is running</p>
            </div>

            <div className="card">
              <h3>Status</h3>
              <p>All services OK</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Dashboard;