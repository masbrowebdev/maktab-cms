export default function Teachers() {
    return (
    <section id="tim-pengajar" className="p-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Tim Pengajar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img src="https://placehold.co/150" alt="Foto Guru" className="w-32 h-32 object-cover rounded-full mx-auto mb-4"/>
                <h3 className="text-xl font-semibold">Dr. Siti Aisyah</h3>
                <p>Guru Matematika</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img src="https://placehold.co/150" alt="Foto Guru" className="w-32 h-32 object-cover rounded-full mx-auto mb-4"/>
                <h3 className="text-xl font-semibold">Budi Santoso</h3>
                <p>Guru IPA</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <img src="https://placehold.co/150" alt="Foto Guru" className="w-32 h-32 object-cover rounded-full mx-auto mb-4"/>
                <h3 className="text-xl font-semibold">Rina Kartika</h3>
                <p>Guru Bahasa Inggris</p>
            </div>
        </div>
    </section>
    );
  }