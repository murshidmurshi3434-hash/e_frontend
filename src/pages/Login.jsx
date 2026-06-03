import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://e-backend-scgm.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      setMessage("Login successful");

      console.log(response.data);

      window.location.href = "/";

    } catch (error) {

      console.log("LOGIN ERROR:", error);

      console.log("RESPONSE:", error.response);

      setMessage(
        error.response?.data?.message ||
        "Login failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-8">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white w-full max-w-md rounded-[40px] shadow-xl p-10"
      >

        <p className="text-gray-500 uppercase tracking-[4px]">
          Welcome Back
        </p>

        <h1 className="text-5xl font-bold text-gray-900 mt-4">
          Login
        </h1>

        {message && (
          <p className="mt-6 text-center text-gray-700">
            {message}
          </p>
        )}

        <form
          onSubmit={handleLogin}
          className="mt-10 space-y-6"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border border-gray-300 p-5 rounded-2xl outline-none focus:border-black"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border border-gray-300 p-5 rounded-2xl outline-none focus:border-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-2xl hover:scale-105 transition"
          >
            Login
          </button>

        </form>

      </motion.div>

    </div>
  );
}

export default Login;