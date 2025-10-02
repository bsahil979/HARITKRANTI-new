import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        Harit Kranti
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:underline" replace={true}>
          Home
        </Link>
        <Link to="/marketplace" className="hover:underline" replace={true}>
          Marketplace
        </Link>
        <Link to="/weather" className="hover:underline" replace={true}>
          Weather
        </Link>
        <Link to="/crop-info" className="hover:underline" replace={true}>
          Crop Info
        </Link>
        <Link to="/about" className="hover:underline" replace={true}>
          About Us
        </Link>
        <Link to="/login" className="hover:underline" replace={true}>
          Login
        </Link>
      </div>
    </nav>
  );
}
