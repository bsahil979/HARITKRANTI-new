import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Marketplace() {
  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    categoryFilter === "All"
      ? products
      : products.filter((p) => p.category === categoryFilter);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter by Category:</label>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border rounded p-2"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
