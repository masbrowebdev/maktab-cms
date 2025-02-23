import { RiFocus2Fill, RiShieldCheckFill } from "@remixicon/react";

type props = {
    content: {
      visionText: Array<string>;
      missionText: Array<string>;
    }
}

export default function VisionMission({
  content
}: props) {
    return (
      <section className="p-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Visi & Misi Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full 1 transform hover:scale-105 transition-all duration-300 ease-in-out">
                <RiShieldCheckFill
                  size={40} // set custom `width` and `height`
                  className="mb-2 fill-primary" // add custom class name
                />
                <h3 className="text-xl font-semibold mb-2 text-primary">Visi</h3>
                { content.visionText.length === 1 ? <div dangerouslySetInnerHTML={{__html: content.visionText[0]}} /> : <ul className="list-disc pl-5" dangerouslySetInnerHTML={{ __html: 
                    (content.visionText.map((text,index) => <li key={index}>{ text }</li> ) )
                 }} />}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-full 1 transform hover:scale-105 transition-all duration-300 ease-in-out">
                <RiFocus2Fill
                  size={40} // set custom `width` and `height`
                  className="mb-2 fill-primary" // add custom class name
                />
                <h3 className="text-xl font-semibold mb-2 text-primary">Misi</h3>
                { content.missionText.length === 1 ? <div dangerouslySetInnerHTML={{__html: content.missionText[0]}} /> : <ul className="list-disc pl-5" dangerouslySetInnerHTML={{ __html: 
                    ( content.missionText.map((text,index) => `<li key=${index}>${ text }</li>` ).join('') )
                 }} />}
            </div>
        </div>
    </section>
    );
  }