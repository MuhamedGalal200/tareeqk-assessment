
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };
  const navigate = useNavigate();


  const handleLogin = async () => {
    const { email, password } = form;

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
     setLoading(true);

    try {
      const res = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      const { user, token } = res.data;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      window.location.href = "/";
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="EMail"
        className="w-full p-2 border rounded mb-3"
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full p-2 border rounded mb-4"
      />
      {/* <button
        onClick={handleLogin}
        className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Log In
      </button> */}
      <button
  onClick={handleLogin}
  disabled={loading} 
  className={`w-full px-4 py-2 rounded-md font-semibold transition 
    ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-900'} 
    text-white shadow-md`}
>
  {loading ? "Lighing in..." : "Login"}
</button>

      <div className="text-center mt-4 text-sm">
    Not a member?{" "}
  <span
    onClick={() => navigate("/register")}
    className="text-blue-600 cursor-pointer hover:underline"
  >
     Regester Now
  </span>
</div>

    </div>
  );
};

export default LoginPage;
