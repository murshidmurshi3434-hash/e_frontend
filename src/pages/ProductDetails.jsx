import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";

import products from "../data/products";
import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="container mx-auto px-4 py-12 max-w-5xl">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mb-6 bg-white px-4 py-2 rounded-full shadow hover:scale-105 transition text-sm"
        >
          ← Back
        </button>

        <div className="bg-white rounded-[20px] shadow-xl p-6 sm:p-8 md:p-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Image */}
          <div className="overflow-hidden rounded-[16px] h-64 sm:h-80 md:h-auto">

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />

          </div>

          {/* Details */}
          <div>

            <p className="text-gray-500 uppercase tracking-[4px] text-sm">
              Luxury Watch
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-3">
              {product.title}
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-4">
              ₹{product.price}
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed text-sm sm:text-base">
              {product.description}
            </p>

            {/* ADD TO CART */}
            <button
              onClick={() => addToCart(product)}
              className="mt-6 bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base hover:scale-105 transition duration-300"
            >
              Add To Cart
            </button>

            <p className="mt-6 text-gray-400 text-sm">
              Product ID: {product.id}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;