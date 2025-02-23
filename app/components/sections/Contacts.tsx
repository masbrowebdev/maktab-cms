export default function Contacts() {
    return (
    <section id="kontak">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.8532494018145!2d98.7650959739988!3d3.620997050072989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031341e4c8898b5%3A0xd80c0cada5925940!2sGg.%20Teratai%2C%20Bandar%20Klippa%2C%20Kec.%20Percut%20Sei%20Tuan%2C%20Kabupaten%20Deli%20Serdang%2C%20Sumatera%20Utara%2020371!5e0!3m2!1sen!2sid!4v1740326439285!5m2!1sen!2sid" className="w-full" height="450" style={{
            border: 0
        }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className="p-8">
            <h2 className="text-3xl font-semibold text-center mb-6">Lokasi Pondok</h2>
            {/* <p className="text-center">Hubungi kami di alamat berikut:</p> */}
            <p className="text-center text-lg">Jl. Masjid, Gang Teratai 13 No. 2B<br/>Desa Bandar Khalipah, Kec. Percut Sei Tuan<br/>Kab. Deli Serdang, Prov. Sumatera Utara</p>
            {/* <p className="text-center text-lg">Email: info@sekolahkami.com</p> */}
            <p className="text-center text-lg">Telp: 0813-61747-396</p>
        </div>
    </section>
    );
  }