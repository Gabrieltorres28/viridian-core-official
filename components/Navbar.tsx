'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-5">
          <div className="relative w-16 h-16 flex items-center justify-center bg-emerald-600/10 rounded-full backdrop-blur-sm ring-2 ring-emerald-500 shadow-inner">
            <svg className="absolute inset-0 w-full h-full text-emerald-500 opacity-20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <Image src="/logo.png" alt="Viridian Core" width={36} height={36} className="z-10 drop-shadow-md" />
          </div>
          <span className="text-emerald-400 text-2xl font-bold tracking-wider hidden sm:inline">Viridian Core</span>
        </div>
        <ul className="flex space-x-8 text-white text-base font-semibold">
          <li><a href="#about" className="hover:text-emerald-400 transition">Nosotros</a></li>
          <li><a href="#services" className="hover:text-emerald-400 transition">Servicios</a></li>
          <li><a href="#contact" className="hover:text-emerald-400 transition">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
