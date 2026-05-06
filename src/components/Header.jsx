import React, { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 rounded-organic px-6 py-3 flex items-center justify-between w-[90%] max-w-5xl ${scrolled ? 'bg-[#2A2A35]/60 backdrop-blur-md border border-white/5 shadow-2xl' : 'bg-transparent'}`}>
      <div className="flex items-center gap-2">
        <Bot className="w-6 h-6 text-champagne" />
        <span className="font-inter font-bold text-lg tracking-wide text-ivory">Cygnus IA</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-inter text-ivory/80">
        <a href="#soluciones" className="hover:text-champagne transition-colors">Soluciones</a>
        <a href="#filosofia" className="hover:text-champagne transition-colors">Filosofía</a>
        <a href="#protocolo" className="hover:text-champagne transition-colors">Protocolo</a>
      </nav>
      <a href="#contacto" className="relative group overflow-hidden rounded-full px-5 py-2 bg-ivory text-obsidian font-semibold text-sm transition-transform duration-300 hover:scale-105 active:scale-95">
        <span className="relative z-10 group-hover:text-obsidian transition-colors duration-300">Auditoría Gratuita</span>
        <div className="absolute inset-0 bg-champagne translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
      </a>
    </header>
  );
}
