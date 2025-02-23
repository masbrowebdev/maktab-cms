import { Outlet } from "react-router";
import type { Route } from "./+types/LandingPage";
import Navbar from "~/components/layouts/landing-page/Navbar";

export async function loader() {
    return {
      menu: [
        {
          link: '#prestasi',
          label: 'Prestasi',
        },
        {
          link: '#tim-pengajar',
          label: 'Tim Pengajar',
        },
        {
          link: '#gallery',
          label: 'Gallery',
        },
        {
          link: '#kontak',
          label: 'Lokasi',
        },
        {
          link: '/info-pendaftaran',
          label: 'Info Pendaftaran',
        },
      ],
      navbar: {
        logoWithText: true,
        navbarTextColor: 'text-primary',
      },
      identity: {
        schoolLogo: './assets/logo.png',
        schoolName: 'Pondok Pesantren \'Ainul Hayah'
      }
    };
}

export default function LandingPage(
    {loaderData}: Route.ComponentProps
) {
  const { identity, navbar, menu } = loaderData;

  return (
    <>
      <Navbar identity={ identity } navbar={ navbar } menu={menu}/>
      <main className="pt-5">
        <Outlet />
      </main>
    </>
  );
}
