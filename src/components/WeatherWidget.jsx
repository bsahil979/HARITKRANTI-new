import { weather } from "../data/weather";

export default function WeatherWidget() {
  return (
    <div className="bg-white shadow rounded p-4 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">Current Weather</h2>
      <div className="flex items-center space-x-4">
        <div className="text-5xl">{weather.current.icon}</div>
        <div>
          <div className="text-3xl font-bold">{weather.current.temperature}°C</div>
          <div>{weather.current.condition}</div>
        </div>
      </div>
      <h3 className="mt-4 font-semibold">Weekly Forecast</h3>
      <div className="grid grid-cols-7 gap-2 text-center mt-2">
        {weather.weekly.map((day) => (
          <div key={day.day} className="text-sm">
            <div>{day.day}</div>
            <div>{day.temperature}°C</div>
            <div>{day.condition}</div>
          </div>
        ))}
      </div>
      <h3 className="mt-4 font-semibold">Farming Tips</h3>
      <ul className="list-disc list-inside mt-2 text-sm">
        {weather.tips.map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
