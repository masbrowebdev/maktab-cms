export default function Galleries() {
    return (
    // <section id="gallery" className="p-8">
    //     <h2 className="text-3xl font-semibold text-center mb-6">Gallery</h2>
    //     <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
    //         <div className="bg-gray-100 p-6 rounded shadow-md">
    //             <img src="https://placehold.co/300x200?text=Gallery+Image" alt="Gallery Image" className="w-full h-64 object-cover rounded"/>
    //         </div>
    //         <div className="bg-gray-100 p-6 rounded shadow-md">
    //             <img src="https://placehold.co/300x200?text=Gallery+Image" alt="Gallery Image" className="w-full h-64 object-cover rounded"/>
    //         </div>
    //         <div className="bg-gray-100 p-6 rounded shadow-md">
    //             <img src="https://placehold.co/300x200?text=Gallery+Image" alt="Gallery Image" className="w-full h-64 object-cover rounded"/>
    //         </div>
    //     </div>
    // </section>
    <section id="gallery" className="py-12 bg-gray-50 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Dokumentasi</h2>
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            <img className="w-full rounded-xl shadow" src="./assets/galeri/gallery-1.jpg" alt="" />
            <img className="w-full rounded-xl shadow" src="./assets/galeri/gallery-2.jpg" alt="" />
            <img className="w-full rounded-xl shadow" src="./assets/galeri/gallery-3.jpg" alt="" />
            <img className="w-full rounded-xl shadow" src="./assets/galeri/gallery-4.jpg" alt="" />
            <img className="w-full rounded-xl shadow" src="./assets/galeri/gallery-5.jpg" alt="" />
            <img className="w-full rounded-xl shadow" src="./assets/galeri/gallery-6.jpg" alt="" />
            <img className="w-full rounded-xl shadow" src="./assets/galeri/gallery-7.jpg" alt="" />
            <img className="w-full rounded-xl shadow" src="./assets/galeri/gallery-8.jpg" alt="" />
            <img className="w-full rounded-xl shadow" src="./assets/galeri/gallery-9.jpg" alt="" />
            <img className="w-full rounded-xl shadow" src="./assets/galeri/gallery-10.jpg" alt="" />
            <img className="w-full rounded-xl shadow" src="./assets/galeri/gallery-11.jpg" alt="" />
            {/* <img className="w-full rounded-xl shadow" src="https://placehold.co/232x290" width="232" height="290" alt="Image 01" />
            <img className="w-full rounded-xl shadow" src="https://placehold.co/232x174" width="232" height="174" alt="Image 01" />
            <img className="w-full rounded-xl shadow" src="https://placehold.co/232x174" width="232" height="174" alt="Image 01" />
            <img className="w-full rounded-xl shadow" src="https://placehold.co/232x174" width="232" height="174" alt="Image 01" />               */}
        </div>
        </div>
    </section>

    );
  }