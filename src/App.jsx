import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./router/Login";
import Dashboard from "./router/Dashboard";
import ProtectedRoute from "./router/ProtectedRoute";
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
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;