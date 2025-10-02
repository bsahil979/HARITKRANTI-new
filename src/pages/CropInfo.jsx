import { crops } from "../data/crops";
import CropCard from "../components/CropCard";

export default function CropInfo() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Crop Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {crops.map((crop) => (
          <CropCard key={crop.id} crop={crop} />
        ))}
      </div>
    </div>
  );
}
