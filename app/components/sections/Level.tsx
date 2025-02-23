import { RiGraduationCapFill } from "@remixicon/react";

export default function Levels() {
    return (
    <section id="jenjang" className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Jenjang Tersedia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded shadow-md text-center">
                <RiGraduationCapFill
                    size={40} // set custom `width` and `height`
                    className="mb-2 fill-primary m-auto tex-center" // add custom class name
                />
                <h3 className="text-xl font-semibold">MTS (Madrasah Tsanawiyah)</h3>
                <p className="text-md">Setara Dengan SMP</p>
            </div>
            <div className="bg-white p-6 rounded shadow-md text-center">
                <RiGraduationCapFill
                    size={40} // set custom `width` and `height`
                    className="mb-2 fill-secondary m-auto tex-center" // add custom class name
                />
                <h3 className="text-xl font-semibold">MA (Madrasah Aliyah)</h3>
                <p className="text-md">Setara Dengan SMA</p>
            </div>
        </div>
    </section>    
    );
  }