import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-[80vh] bg-gray-100 flex items-center">

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >

          <p className="text-gray-500 mb-4 tracking-[4px] uppercase text-sm">
            Luxury Timepieces
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Timeless <br />
            Elegance
          </h1>

          <p className="text-gray-600 mt-6 text-base sm:text-lg leading-relaxed">
            Discover premium watches crafted with precision,
            luxury, and modern sophistication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 sm:px-8 py-3 rounded-full text-base"
            >
              Shop Now
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-gray-400 px-6 sm:px-8 py-3 rounded-full text-base hover:bg-white"
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
          className="w-full md:w-1/2 flex justify-center"
        >

          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa"
            alt="watch"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl shadow-2xl object-cover"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;