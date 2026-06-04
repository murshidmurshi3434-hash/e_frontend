import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, image, title, price }) {

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/product/${id}`)}
      className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col h-full"
    >

      {/* Product Image */}
      <div className="overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={title}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col">

        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-gray-500 mt-2 text-sm">
          Premium luxury watch
        </p>

        <div className="flex items-end justify-between mt-4">

          <h3 className="text-lg sm:text-2xl font-bold text-black">
            ₹{price}
          </h3>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white px-4 py-2 rounded-full text-sm"
          >
            Add Cart
          </motion.button>

        </div>

      </div>

    </motion.div>
  );
}

export default ProductCard;