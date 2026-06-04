import { useState } from "react";
import axios from "axios";

function Admin() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/products`,
        {
          name,
          price,
          image,
          description,
        }
      );

      alert("Product Added!");

      setName("");
      setPrice("");
      setImage("");
      setDescription("");

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="min-h-screen bg-gray-100">

      <div className="container mx-auto px-4 py-12">

        <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-lg">

          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Add Watch
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-3"
          >

            <input
              type="text"
              placeholder="Watch Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg"
            >
              Add Product
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Admin;