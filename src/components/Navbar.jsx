import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cartItems } = useContext(CartContext);

  const token = localStorage.getItem("token");

  const [mobileOpen, setMobileOpen] = useState(false);

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

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

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

        <div className="hidden md:flex items-center gap-2 md:gap-4">

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

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <Link to="/cart">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-3 py-2 rounded-full text-sm"
            >
              Cart ({cartItems.length})
            </motion.button>
          </Link>

          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
            className="p-2 rounded-md border border-gray-200"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-3">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <div className="text-gray-700 font-medium">Home</div>
            </Link>
            <Link to="/collection" onClick={() => setMobileOpen(false)}>
              <div className="text-gray-700 font-medium">Collection</div>
            </Link>
            <Link to="/about" onClick={() => setMobileOpen(false)}>
              <div className="text-gray-700 font-medium">About</div>
            </Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <div className="text-gray-700 font-medium">Contact</div>
            </Link>

            <div className="pt-2 border-t border-gray-100">
              {!token ? (
                <div className="flex gap-3">
                  <Link to="/login" onClick={() => setMobileOpen(false)}>
                    <div className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 text-sm">Login</div>
                  </Link>
                  <Link to="/register" onClick={() => setMobileOpen(false)}>
                    <div className="px-4 py-2 bg-black text-white rounded-full text-sm">Register</div>
                  </Link>
                </div>
              ) : (
                <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-full text-sm">Logout</button>
              )}
            </div>
          </div>
        </div>
      )}

    </motion.nav>
  );
}

export default Navbar;