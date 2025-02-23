import { RiBookFill, RiBookMarkedFill } from "@remixicon/react";

export default function Subjects() {
    return (

    // <section id="mata-pelajaran" className="bg-gray-200 p-8">
    // <h2 className="text-3xl font-semibold text-center mb-6">Mata Pelajaran</h2>
    // <div className="grid grid-cols-2 md:grid-cols-4 gap-6"></div></section>

    <section id="mata-pelajaran" className="p-8">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Mata Pelajaran</h2>

            <div className="flex flex-col lg:flex-row gap-8 justify-center">

                <div className="bg-primary p-6 rounded-lg shadow-lg w-full lg:w-1/2">
                    <h3 className="text-xl text-center font-semibold text-white mb-2 flex items-center">
                        <RiBookMarkedFill
                            size={40} // set custom `width` and `height`
                            className="mb-2 fill-white" // add custom class name
                        />
                        Mata Pelajaran Diniyah
                    </h3>
                    <ul className="list-none space-y-2 text-white">
                        <li className="hover:text-yellow-300">Aqidah & Manhaj</li>
                        <li className="hover:text-yellow-300">Fiqh & Ushul Fiqh</li>
                        <li className="hover:text-yellow-300">Hadits</li>
                        <li className="hover:text-yellow-300">Mustholah Hadits</li>
                        <li className="hover:text-yellow-300">Bahasa Arab</li>
                        <li className="hover:text-yellow-300">DII</li>
                    </ul>
                </div>

                <div className="bg-secondary p-6 rounded-lg shadow-lg w-full lg:w-1/2">
                    <h3 className="text-xl text-center font-semibold text-white mb-2 flex items-center">
                        <RiBookFill
                            size={40} // set custom `width` and `height`
                            className="mb-2 fill-white" // add custom class name
                        />
                        Mata Pelajaran Umum
                    </h3>
                    <ul className="list-none space-y-2 text-white">
                        <li className="hover:text-yellow-300">Bahasa Indonesia</li>
                        <li className="hover:text-yellow-300">Bahasa Inggris</li>
                        <li className="hover:text-yellow-300">Matematika</li>
                        <li className="hover:text-yellow-300">Fisika</li>
                        <li className="hover:text-yellow-300">Kimia</li>
                        <li className="hover:text-yellow-300">Teknologi Informasi</li>
                        <li className="hover:text-yellow-300">DII</li>
                    </ul>
                </div>

            </div>
        </div>
    </section>
    );
  }