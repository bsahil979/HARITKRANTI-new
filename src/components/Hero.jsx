export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center rounded-lg overflow-hidden h-96 flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl font-extrabold mb-2">HARITKRANTI</h1>
        <p className="text-xl">Your Partner in Modern Farming</p>
      </div>
    </section>
  );
}
