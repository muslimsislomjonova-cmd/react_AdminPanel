import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./dashboard.css";

function AdminLayout() {
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
          <li>
            <NavLink to="/dashboard" end>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/products">
              Products
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/users">
              Users
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/carts">
              Carts
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/settings">
              Settings
            </NavLink>
          </li>
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
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default AdminLayout;