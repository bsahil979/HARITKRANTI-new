import Hero from "../components/Hero";
import WeatherWidget from "../components/WeatherWidget";
import ProductCard from "../components/ProductCard";
import CropCard from "../components/CropCard";
import { products } from "../data/products";
import { crops } from "../data/crops";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      <Hero />

      <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Real Time Weather Forecast */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-4">Real Time Weather Forecast</h2>
          <WeatherWidget />
        </div>

        {/* Government Schemes */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-4">Government Schemes</h2>
          <ul className="list-disc list-inside text-blue-600 space-y-2">
            <li><a href="#" className="hover:underline">Pension Scheme</a></li>
            <li><a href="#" className="hover:underline">Kisan Credit Card (KCC)</a></li>
            <li><a href="#" className="hover:underline">Soil Health Card Scheme</a></li>
            <li><a href="#" className="hover:underline">Rashtriya Krishi Vikas Yojana (RKVY)</a></li>
          </ul>
        </div>

        {/* Marketplace */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-4">Marketplace</h2>
          <div className="grid grid-cols-1 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Crop Guidance */}
        <div className="col-span-1">
          <h2 className="text-lg font-semibold mb-4">Crop Guidance</h2>
          <div className="grid grid-cols-1 gap-4">
            {crops.map((crop) => (
              <CropCard key={crop.id} crop={crop} />
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Assistance and Guidance */}
      <section className="bg-green-50 p-6 rounded shadow max-w-4xl mx-auto text-center">
        <h2 className="text-lg font-semibold mb-2">Farmer Assistance and Guidance</h2>
        <p>
          We provide expert advice, tips, and resources to help farmers improve crop yield, manage pests, and adopt sustainable farming practices.
        </p>
      </section>
    </div>
  );
}
