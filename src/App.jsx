import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./router/Login";
import ProtectedRoute from "./router/ProtectedRoute";
import AdminLayout from "./router/AdminLayout";
import DashboardHome from "./router/DashboardHome";
import Products from "./router/Products";
import Users from "./router/Users";
import Carts from "./router/Carts";
import Settings from "./router/Settings";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} />

       
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="products" element={<Products />} />
          <Route path="users" element={<Users />} />
          <Route path="carts" element={<Carts />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;