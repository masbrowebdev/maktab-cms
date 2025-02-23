export default function Galleries() {
    return (
    <section id="gallery" className="p-8 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <img src="https://placehold.co/300x200?text=Gallery+Image" alt="Gallery Image" className="w-full h-64 object-cover rounded-lg"/>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <img src="https://placehold.co/300x200?text=Gallery+Image" alt="Gallery Image" className="w-full h-64 object-cover rounded-lg"/>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                <img src="https://placehold.co/300x200?text=Gallery+Image" alt="Gallery Image" className="w-full h-64 object-cover rounded-lg"/>
            </div>
        </div>
    </section>
    );
  }