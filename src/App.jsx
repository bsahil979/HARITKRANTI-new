import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import WeatherForecast from "./pages/WeatherForecast";
import CropInfo from "./pages/CropInfo";
import AboutUs from "./pages/AboutUs";
import FarmerDashboard from "./pages/FarmerDashboard";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/weather" element={<WeatherForecast />} />
            <Route path="/crop-info" element={<CropInfo />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
