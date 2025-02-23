export default function Levels() {
    return (
    <section id="jenjang" className="bg-gray-100 p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Jenjang Tersedia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">SD</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">SMP</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">SMA</h3>
            </div>
        </div>
    </section>    
    );
  }