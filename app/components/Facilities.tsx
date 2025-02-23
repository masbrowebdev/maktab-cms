export default function Facilities() {
    return (
    <section id="fasilitas" className="bg-gray-200 p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Fasilitas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">Laboratorium</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">Ruang Kelas</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">Perpustakaan</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">Lapangan Olahraga</h3>
            </div>
        </div>
    </section>
    );
  }