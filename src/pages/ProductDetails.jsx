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
    <div className="min-h-screen bg-gray-100 px-8 py-20">

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-10 bg-white px-6 py-3 rounded-full shadow hover:scale-105 transition"
      >
        ← Back
      </button>

      <div className="bg-white rounded-[40px] shadow-xl p-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-14">

        {/* Image */}
        <div className="overflow-hidden rounded-[30px]">

          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />

        </div>

        {/* Details */}
        <div>

          <p className="text-gray-500 uppercase tracking-[4px]">
            Luxury Watch
          </p>

          <h1 className="text-5xl font-bold text-gray-900 mt-4">
            {product.title}
          </h1>

          <h2 className="text-4xl font-bold mt-6">
            ₹{product.price}
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            {product.description}
          </p>

          {/* ADD TO CART */}
          <button
            onClick={() => addToCart(product)}
            className="mt-8 bg-black text-white px-8 py-4 rounded-full text-lg hover:scale-105 transition duration-300"
          >
            Add To Cart
          </button>

          <p className="mt-8 text-gray-400">
            Product ID: {product.id}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;