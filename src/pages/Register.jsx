import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        {
          email,
          password,
        }
      );

      setMessage("Account created successfully");
      navigate("/login");

    } catch (error) {

      setMessage(
        error.response?.data?.message ||
        "Registration failed"
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
          Create Account
        </p>

        <h1 className="text-5xl font-bold text-gray-900 mt-4">
          Register
        </h1>

        {message && (
          <p className="mt-6 text-center text-gray-700">
            {message}
          </p>
        )}

        <form
          onSubmit={handleRegister}
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
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border border-gray-300 p-5 rounded-2xl outline-none focus:border-black"
          />

          <button className="w-full bg-black text-white py-4 rounded-2xl hover:scale-105 transition">
            Create Account
          </button>

        </form>

      </motion.div>

    </div>
  );
}

export default Register;