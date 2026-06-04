import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

function Register() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5001/api/auth/register",
        {
          email,
          password,
        }
      );

      setMessage("Account created successfully");

    } catch (error) {

      setMessage(
        error.response?.data?.message ||
        "Registration failed"
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
          Create Account
        </p>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3">
          Register
        </h1>

        {message && (
          <p className="mt-4 text-center text-gray-700 text-sm">
            {message}
          </p>
        )}

        <form
          onSubmit={handleRegister}
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
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border border-gray-300 p-3 rounded-2xl outline-none focus:border-black"
          />

          <button className="w-full bg-black text-white py-3 rounded-2xl hover:scale-105 transition">
            Create Account
          </button>

        </form>

      </motion.div>

    </div>
  );
}

export default Register;