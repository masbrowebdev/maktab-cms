export default function Achievements() {
    return (
    <section id="prestasi" className="p-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Prestasi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">Juara 1 Olimpiade Matematika</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">Best School Award 2024</h3>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">Juara 2 Kompetisi Sains</h3>
            </div>
        </div>
    </section>
    );
  }