export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold">
              <a href="#" className="text-white">Logo Sekolah</a>
          </div>
          <div className="space-x-4">
              <a href="#home" className="hover:text-gray-300">Beranda</a>
              <a href="#visi-misi" className="hover:text-gray-300">Visi & Misi</a>
              <a href="#mata-pelajaran" className="hover:text-gray-300">Mata Pelajaran</a>
              <a href="#prestasi" className="hover:text-gray-300">Prestasi</a>
              <a href="#tim-pengajar" className="hover:text-gray-300">Tim Pengajar</a>
              <a href="#fasilitas" className="hover:text-gray-300">Fasilitas</a>
              <a href="#gallery" className="hover:text-gray-300">Gallery</a>
              <a href="#kontak" className="hover:text-gray-300">Kontak</a>
          </div>
      </div>
  </nav>
  );
}