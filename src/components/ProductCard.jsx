export default function ProductCard({ product }) {
  return (
    <div className="border rounded shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded mb-4"
      />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-green-700 font-bold">${product.price}</p>
      <p className="text-sm text-gray-600">{product.category}</p>
    </div>
  );
}
