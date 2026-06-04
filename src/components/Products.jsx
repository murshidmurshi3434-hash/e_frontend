import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://e-backend-scgm.onrender.com/api/products"
        );
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">

      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
        Luxury Watches
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col h-full"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
            />

            <div className="p-4 flex-1 flex flex-col">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">
                  {product.name}
                </h2>

                <p className="text-gray-500 mt-2 text-sm max-h-16 overflow-hidden">
                  {product.description}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-xl font-bold">
                  ₹{product.price}
                </p>

                <button
                  className="mt-3 w-full bg-black text-white py-2 rounded-xl"
                >
                  Add To Cart
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;