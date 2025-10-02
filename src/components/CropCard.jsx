export default function CropCard({ crop }) {
  return (
    <div className="border rounded shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={crop.image}
        alt={crop.name}
        className="h-40 w-full object-cover rounded mb-4"
      />
      <h3 className="font-semibold text-lg">{crop.name}</h3>
      <p className="text-gray-700 text-sm">{crop.description}</p>
    </div>
  );
}
