import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function ProductCard({ id, image, title, price }) {

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/product/${id}`)}
      className="bg-white rounded-[30px] overflow-hidden shadow-md hover:shadow-2xl transition duration-300 cursor-pointer"
    >

      {/* Product Image */}
      <div className="overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={title}
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-6">

        <h2 className="text-2xl font-semibold text-gray-800">
          {title}
        </h2>

        <p className="text-gray-500 mt-2">
          Premium luxury watch
        </p>

        <div className="flex items-center justify-between mt-6">

          <h3 className="text-2xl font-bold text-black">
            ₹{price}
          </h3>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white px-5 py-3 rounded-full"
          >
            Add Cart
          </motion.button>

        </div>

      </div>

    </motion.div>
  );
}

export default ProductCard;