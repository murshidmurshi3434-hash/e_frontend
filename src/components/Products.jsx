import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const { data } = await axios.get(
          "http://localhost:5001/api/products"
        );

        setProducts(data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchProducts();

  }, []);

  return (

    <div className="bg-gray-100 min-h-screen p-10">

      <h1 className="text-5xl font-bold text-center mb-10">
        Luxury Watches
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {products.map((product) => (

          <div
            key={product._id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold">
                {product.name}
              </h2>

              <p className="text-gray-500 mt-2">
                {product.description}
              </p>

              <p className="text-2xl font-bold mt-4">
                ₹{product.price}
              </p>

              <button
                className="mt-4 w-full bg-black text-white py-3 rounded-xl"
              >
                Add To Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Home;