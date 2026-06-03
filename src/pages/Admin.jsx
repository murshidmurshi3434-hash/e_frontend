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
        "http://localhost:5001/api/products",
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

    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-lg">

        <h1 className="text-3xl font-bold mb-6">
          Add Watch
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Watch Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            className="w-full border p-4 rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl"
          >
            Add Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default Admin;