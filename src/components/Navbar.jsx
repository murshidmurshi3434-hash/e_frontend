import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cartItems } = useContext(CartContext);

  const token = localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem("token");

    window.location.reload();
  };

  return (

    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-white border-b border-gray-200 px-8 py-4 shadow-sm sticky top-0 z-50"
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <Link to="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold text-gray-800 tracking-wide cursor-pointer"
          >
            CHRONOVA
          </motion.h1>
        </Link>

        <ul className="hidden md:flex gap-10 text-gray-700 font-medium">

          <Link to="/">
            <motion.li whileHover={{ y: -3 }}>
              Home
            </motion.li>
          </Link>

          <Link to="/collection">
            <motion.li whileHover={{ y: -3 }}>
              Collection
            </motion.li>
          </Link>

          <Link to="/about">
            <motion.li whileHover={{ y: -3 }}>
              About
            </motion.li>
          </Link>

          <Link to="/contact">
            <motion.li whileHover={{ y: -3 }}>
              Contact
            </motion.li>
          </Link>

        </ul>

        <div className="flex items-center gap-4">

          {!token ? (
            <>
              <Link to="/login">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:block border border-gray-300 px-5 py-2 rounded-full text-gray-700 hover:bg-gray-100 transition"
                >
                  Login
                </motion.button>
              </Link>

              <Link to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden md:block bg-black text-white px-5 py-2 rounded-full"
                >
                  Register
                </motion.button>
              </Link>
            </>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="bg-red-500 text-white px-5 py-2 rounded-full"
            >
              Logout
            </motion.button>
          )}

          <Link to="/cart">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-5 py-2 rounded-full"
            >
              Cart ({cartItems.length})
            </motion.button>
          </Link>

        </div>

      </div>

    </motion.nav>
  );
}

export default Navbar;