import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Collection() {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="container mx-auto px-4 py-12">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-gray-500 uppercase tracking-[4px] text-sm">
            Premium Collection
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mt-4">
            All Watches
          </h1>

        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

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