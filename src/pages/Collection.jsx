import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Collection() {
  return (
    <div className="min-h-screen bg-gray-100 px-8 py-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-gray-500 uppercase tracking-[4px]">
            Premium Collection
          </p>

          <h1 className="text-6xl font-bold text-gray-900 mt-4">
            All Watches
          </h1>

        </div>

        {/* Products */}
        <div className="grid md:grid-cols-3 gap-10">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Collection;