import { RiTrophyFill } from "@remixicon/react";

export default function Achievements() {
    return (
    <section id="prestasi" className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Prestasi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out p-6   rounded shadow-md text-center">
                <RiTrophyFill
                    size={40} // set custom `width` and `height`
                    className="mb-2 fill-primary text-center m-auto" // add custom class name
                />
                <h3 className="text-md font-semibold">Juara 3 MHQ 10 Juz Putra Muslim Berdedikasi 7 2024</h3>
                <p className="text-md">Lutfi Eric Khalfani</p>
            </div>
            <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out p-6   rounded shadow-md text-center">
                <RiTrophyFill
                    size={40} // set custom `width` and `height`
                    className="mb-2 fill-primary text-center m-auto" // add custom class name
                />
                <h3 className="text-md font-semibold">Juara 4 MHQ 5 Juz Putra TEC Jabal Rahmah 2024</h3>
                <p className="text-md">Lutfi Eric Khalfani</p>
            </div>
            <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out p-6   rounded shadow-md text-center">
                <RiTrophyFill
                    size={40} // set custom `width` and `height`
                    className="mb-2 fill-primary text-center m-auto" // add custom class name
                />
                <h3 className="text-md font-semibold">Juara 3 MHQ 5 Juz Putra Muslim Berdedikasi 7 2024</h3>
                <p className="text-md">Naufal Najmii Hariadi</p>
            </div>
            <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out p-6   rounded shadow-md text-center">
                <RiTrophyFill
                    size={40} // set custom `width` and `height`
                    className="mb-2 fill-primary text-center m-auto" // add custom class name
                />
                <h3 className="text-md font-semibold">Juara 3 MHQ 5 Juz Putra Muslim Berdedikasi 7 2024</h3>
                <p className="text-md">Joko Samudro</p>
            </div>
        </div>
    </section>
    );
  }