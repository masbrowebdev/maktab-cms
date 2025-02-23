export default function HeroSlider() {
  return (
    <section className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white" style={{
        backgroundImage: "url('https://placehold.co/1920x1080?text=Hero+Image')"
    }}>
        <h1 className="text-5xl font-bold mb-4">Selamat Datang di Sekolah Kami</h1>
        <p className="text-xl">Membangun Generasi Unggul dan Berkarakter</p>
    </section>
  );
}