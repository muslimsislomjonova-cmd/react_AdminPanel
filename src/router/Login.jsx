import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

function Login() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    username: "derek",
    password: "jklg*_56"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://fakestoreapi.com/auth/login",
        {
          username: formData.username,
          password: formData.password
        }
      );

      localStorage.setItem("token", res.data.token);
      toast.success("Login successful");

      navigate("/dashboard"); 

    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;