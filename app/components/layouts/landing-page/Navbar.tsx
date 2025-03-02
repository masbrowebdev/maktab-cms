import { useEffect, useState } from "react";
import { Link } from "react-router";

type navbarProps = {
  navbar?: {
    logoWithText?: boolean;
    navbarTextColor?: string;
  }
  identity: {
    schoolLogo: string;
    schoolName: string;
  }
  menu: Array<{link: string; label: string}>
}

export default function Navbar({
  identity,
  navbar,
  menu
}: navbarProps) {
  const [heightNav, setHeightNav] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // Get the elements
    const mainNav = document.getElementById('main-nav');
    // const navbarToggle = document.getElementById('navbar-toggle');
    // const mobileMenu = document.getElementById('mobile-menu');
    setHeightNav(mainNav?.clientHeight! - 1);

    document.querySelectorAll('#main-nav a').forEach(elem => {
        elem.addEventListener("click", (e) => {
          setIsOpen(false)
          if (elem.getAttribute('href')?.startsWith('#')) {
            e.preventDefault();
            const href = elem.getAttribute('href')!;
            if (document.querySelector(href)) {
              window.scroll({
                top: document.querySelector(href)!.offsetTop - mainNav!.clientHeight, 
                left: 0, 
                behavior: 'smooth' 
              });
            }
          }
        });
    })

    // Toggle the mobile menu
    // navbarToggle!.addEventListener('click', () => {
    //   setIsOpen(!isOpen)
    // });
  }, []);

  return (
    <nav id="main-nav" className={`bg-white ${navbar?.navbarTextColor && 'text-primary'} p-4 fixed w-full top-0 z-50 shadow-lg`}>
      <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-semibold">
            <Link to="/" className="text-primary">
              {
                navbar?.logoWithText ? (<>
                  <img className="max-h-10 inline" src={ identity.schoolLogo } alt={ identity.schoolName } /> <span className="hidden lg:inline">{ identity.schoolName }</span>
                </>) :
                <img className="max-h-10 inline" src={ identity.schoolLogo } alt={ identity.schoolName } />
              }
              
            </Link>
          </div>
          <div className="lg:hidden">
            <button id="navbar-toggle" onClick={ () => setIsOpen(!isOpen) } className="text-primary focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
          </div>

          <div className="hidden lg:flex space-x-4">
            { menu.map((item, index) => !item.link.startsWith('#') ? <Link key={index} to={ item.link } className="hover:text-gray-300">{ item.label }</Link> : <a key={index} href={ item.link } className="hover:text-gray-300">{ item.label }</a>) }
            {/* <a href="#home" className="hover:text-gray-300">Beranda</a> */}
            {/* <a href="#visi-misi" className="hover:text-gray-300">Visi & Misi</a> */}
            {/* <a href="#mata-pelajaran" className="hover:text-gray-300">Mata Pelajaran</a> */}
          </div>
          <div id="mobile-menu" className={`${!isOpen && 'hidden'} px-4 fixed left-0 w-full`} style={{
            top: heightNav
          }}>
            <div className="bg-primary text-white p-4 space-y-4">
              { menu.map((item, index) => <a key={index} href={ item.link } className="block hover:text-gray-300">{ item.label }</a>) }
            </div>
          </div>
      </div>
  </nav>
  );
}