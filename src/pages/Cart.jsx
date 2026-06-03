import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cartItems, removeFromCart } =
    useContext(CartContext);

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-5xl font-bold text-gray-900 mb-12">
          Shopping Cart
        </h1>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (

          <div className="bg-white rounded-[30px] p-16 text-center shadow">

            <h2 className="text-3xl font-semibold text-gray-700">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-4">
              Add luxury watches to your collection.
            </p>

          </div>

        ) : (

          <div className="grid lg:grid-cols-3 gap-10">

            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-[30px] p-6 shadow flex items-center gap-6"
                >

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 rounded-[20px] object-cover"
                  />

                  {/* INFO */}
                  <div className="flex-1">

                    <h2 className="text-2xl font-bold text-gray-800">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Quantity: {item.quantity}
                    </p>

                    <h3 className="text-2xl font-bold mt-4">
                      ₹{item.price}
                    </h3>

                  </div>

                  {/* REMOVE BUTTON */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-5 py-3 rounded-full hover:bg-red-600 transition"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

            {/* SUMMARY */}
            <div className="bg-white rounded-[30px] p-8 shadow h-fit">

              <h2 className="text-3xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="flex justify-between mt-8 text-lg">

                <p>Total Items</p>

                <p>{cartItems.length}</p>

              </div>

              <div className="flex justify-between mt-4 text-lg">

                <p>Total Price</p>

                <p className="font-bold">
                  ₹{totalPrice}
                </p>

              </div>

              <button className="w-full mt-10 bg-black text-white py-4 rounded-full text-lg hover:scale-105 transition">
                Proceed To Checkout
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Cart;