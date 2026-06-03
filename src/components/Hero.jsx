import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-[90vh] bg-gray-100 flex items-center">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-8 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-gray-500 mb-4 tracking-[4px] uppercase">
            Luxury Timepieces
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            Timeless <br />
            Elegance
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Discover premium watches crafted with precision,
            luxury, and modern sophistication.
          </p>

          <div className="flex gap-5 mt-8">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-full text-lg"
            >
              Shop Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-gray-400 px-8 py-4 rounded-full text-lg hover:bg-white"
            >
              Explore
            </motion.button>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa"
            alt="watch"
            className="w-[450px] rounded-[40px] shadow-2xl object-cover"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;