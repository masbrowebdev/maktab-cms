import Contacts from "~/components/sections/Contacts";
import { RiListCheck2, RiCalendarScheduleFill } from "@remixicon/react";


export function meta() {
  return [
    { title: 'Info Pendaftaran' },
    // { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function InfoPendaftaran() {
    return <><section className="bg-white pt-[100px]">
    <h2 className="text-3xl font-semibold text-center mb-6">Info Pendaftaran</h2>

    <div className="container mx-auto p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className="flex items-center space-x-4">
                <RiCalendarScheduleFill
                    size={40} // set custom `width` and `height`
                    className="mb-2 fill-primary" // add custom class name
                />
                <h3 className="text-xl font-semibold text-gray-800">Periode Pendaftaran</h3>
            </div>
            <ul className="list-decimal pl-6 mt-4 text-gray-700">
                <li>Gel. I: 03 Februari - 20 Maret 2025</li>
                <li>Gel. II: 05 April - 25 Mei 2025</li>
            </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className="flex items-center space-x-4">
                <RiListCheck2
                    size={40} // set custom `width` and `height`
                    className="mb-2 fill-primary" // add custom class name
                />
                <h3 className="text-xl font-semibold text-gray-800">Syarat Pendaftaran</h3>
            </div>
            <ul className="list-decimal pl-6 mt-4 text-gray-700">
                <li>Muslim</li>
                <li>Lulus SD/Sederajat, SMP/Sederajat</li>
                <li>Lengkapi Berkas Berikut:</li>
                <ul className="list-inside mt-2">
                    <li>Foto Copy Kartu NISN: 2 Lbr</li>
                    <li>Foto Copy Kartu Keluarga: 2 Lbr</li>
                    <li>Foto Copy KTP Orang Tua: 2 Lbr</li>
                    <li>Foto Copy Ijazah/SKTL: 2 Lbr</li>
                    <li>Foto Copy Akte Lahir: 2 Lbr</li>
                    <li>Surat Keterangan Sehat dari Dokter</li>
                    <li>Pas Foto Lengkap (2x3, 3x4, 4x6): 5 Lbr</li>
                </ul>
                <li>Mampu Membaca Alquran dengan Baik dan Benar</li>
                <li>Gratis Biaya Pendaftaran</li>
                <li>Isi Formulir di <a href="https://bit.ly/ppdb-ainul-hayah" target="_blank" className="text-primary font-bold">bit.ly/ppdb-ainul-hayah</a></li>
            </ul>
        </div>
    </div>
</section>
<Contacts/>
</>
};