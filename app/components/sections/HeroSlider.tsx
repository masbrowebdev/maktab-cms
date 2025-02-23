export default function HeroSlider() {
  return (
    <section className="bg-cover relative bg-center h-screen flex flex-col justify-center items-center text-white" style={{
        backgroundImage: "url('./assets/siswa-sedang-belajar.jpg')"
    }}>
      <div className="w-full h-full top-0 left-0 absolute bg-gray-900 z-1 opacity-70"></div>
      <h1 className="text-2xl lg:text-5xl font-bold mb-4 z-2">Pondok Pesantren 'Ainul Hayah</h1>
      <p className="text-xl lg:text-xl z-2">Membangun Generasi Unggul dan Berilmu</p>
    </section>
  );
}