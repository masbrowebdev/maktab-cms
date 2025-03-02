import type { Route } from "./+types/home";
import HeroSlider from "../components/sections/HeroSlider"
import VisionMission from "../components/sections/VisionMission"
import WelcomeText from "~/components/sections/WelcomeText";
import Subjects from "~/components/sections/Subjects";
import Achievements from "~/components/sections/Achievements";
import Levels from "~/components/sections/Level";
import Teachers from "~/components/sections/Teachers";
import Facilities from "~/components/sections/Facilities";
import Galleries from "~/components/sections/Galleries";
import Contacts from "~/components/sections/Contacts";
import { useEffect } from "react";
import { onPageView } from "~/.client/services/google-analytics";

export async function loader() {
  // let product = await getProductFromCSVFile(params.pid);
  return {
    enableSection: {
      heroSlider: true,
      welcomeText: false,
      visionMission: true,
      subjects: true,
      achievements: true,
      levels: true,
      teachers: true,
      facilities: false,
      galleries: true,
      contacts: true,
    },
    identity: {
      googleSiteVerificationId: 'gXcOiKXqS6dYh94ne9By1BLxr_J94W0lt7zjuarWIA8',
      schoolName: 'Pondok Pesantren \'Ainul Hayah'
    },
    content: {
      visionMission: {
        visionText: [
          'Menjadi Pondok Pendidikan Islam Yang Unggul dan Membentuk Generasi yang Berilmu, Beramal, dan Berakhlak Mulia Sesuai Pahaman Ahlus Sunnah wal Jama\'ah'
        ],
        missionText: [
          'Memberikan Metode Bacaan Alquran dengan baik dan Benar',
          'Memberikan Target Hafalan Alquran yang Mutqin',
          'Membiasakan Bahasa Arab di lingkungan Pondok',
          'Menanamkan nilai-nilai keislaman dalam pelajaran Aqidah, Fiqih, Hadits dan Akhlak',
          'Menjalin Kerjasama dengan Lembaga Umum maupun Agama',
        ]
      }
    }
  };
}

export function meta({
  data
}: Route.MetaArgs) {
  const { identity } = data;
  return [
    { title: identity.schoolName },
    { description: "Visi kami Menjadi Pondok Pendidikan Islam Yang Unggul dan Membentuk Generasi yang Berilmu, Beramal, dan Berakhlak Mulia Sesuai Pahaman Ahlus Sunnah wal Jama'ah" },
    {
      property: "og:image",
      content: "https://ponpesainulhayah.com/assets/siswa-sedang-belajar.jpg",
    },
    {
      property: "og:description",
      content: "Visi kami menjadi Pondok Pendidikan Islam Yang Unggul dan Membentuk Generasi yang Berilmu, Beramal, dan Berakhlak Mulia"
    },
    // { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({
  loaderData,
}: Route.ComponentProps) {
  const { identity, enableSection, content } = loaderData;

  useEffect(() => {
    onPageView({
      page: '/',
      title: 'Homepage'
    })
    return () => {
    }
  }, []);

  return <div className="odd-even-sections">
    { enableSection.heroSlider && <HeroSlider /> }
    { enableSection.welcomeText && <WelcomeText /> }
    { enableSection.visionMission && <VisionMission content={ content.visionMission }/> }
    { enableSection.subjects && <Subjects /> }
    { enableSection.achievements && <Achievements /> }
    { enableSection.levels && <Levels /> }
    { enableSection.teachers && <Teachers /> }
    { enableSection.facilities && <Facilities /> }
    { enableSection.galleries && <Galleries /> }
    { enableSection.contacts && <Contacts /> }
  </div>;
}
