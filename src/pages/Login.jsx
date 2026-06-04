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
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
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

      navigate("/");

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white w-full max-w-md rounded-[20px] shadow-xl p-6 sm:p-8"
      >

        <p className="text-gray-500 uppercase tracking-[4px] text-sm">
          Welcome Back
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
          Login
        </h1>

        {message && (
          <p className="mt-4 text-center text-gray-700 text-sm">
            {message}
          </p>
        )}

        <form
          onSubmit={handleLogin}
          className="mt-6 space-y-4"
        >

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-2xl outline-none focus:border-black"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-2xl outline-none focus:border-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-2xl hover:scale-105 transition"
          >
            Login
          </button>

        </form>

      </motion.div>

    </div>
  );
}

export default Login;