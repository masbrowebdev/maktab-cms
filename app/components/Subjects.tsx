export default function Subjects() {
    return (
    <section id="mata-pelajaran" className="bg-gray-200 p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Mata Pelajaran</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">Matematika</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">Bahasa Indonesia</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">IPA</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold">Bahasa Inggris</h3>
            </div>
        </div>
    </section>
    );
  }