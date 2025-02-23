export default function VisionMission() {
    return (
      <section className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Visi & Misi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">Visi</h3>
                <p>Menjadi lembaga pendidikan terdepan yang mencetak generasi berkualitas dan berkarakter mulia.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-2">Misi</h3>
                <ul className="list-disc pl-5">
                    <li>Menyediakan pendidikan yang berorientasi pada perkembangan karakter dan keterampilan.</li>
                    <li>Mengutamakan kualitas pengajaran dengan metode terbaru.</li>
                    <li>Berkomitmen pada integritas dan inovasi.</li>
                </ul>
            </div>
        </div>
    </section>
    );
  }