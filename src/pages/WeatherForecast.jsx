import WeatherWidget from "../components/WeatherWidget";

export default function WeatherForecast() {
  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Weather Forecast</h2>
      <WeatherWidget />
    </div>
  );
}
