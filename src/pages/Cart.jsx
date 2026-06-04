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
    <div className="min-h-screen bg-gray-100">

      <div className="container mx-auto px-4 py-12 max-w-6xl">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Shopping Cart
        </h1>

        {/* EMPTY CART */}
        {cartItems.length === 0 ? (

          <div className="bg-white rounded-[30px] p-8 sm:p-12 text-center shadow">

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-3">
              Add luxury watches to your collection.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* CART ITEMS */}
            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-[30px] p-4 sm:p-6 shadow flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-[16px] object-cover"
                  />

                  {/* INFO */}
                  <div className="flex-1">

                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800">
                      {item.title}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      Quantity: {item.quantity}
                    </p>

                    <h3 className="text-lg sm:text-2xl font-bold mt-3">
                      ₹{item.price}
                    </h3>

                  </div>

                  {/* REMOVE BUTTON */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition text-sm"
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