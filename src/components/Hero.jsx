import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
      });
      gsap.from(".hero-image", {
        scale: 1.05,
        duration: 2,
        ease: "power2.out"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Dark abstract marble" 
          className="hero-image w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        {/* Gradient overlay to blend with black/obsidian */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-obsidian/60 to-obsidian"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-12">
        <div className="hero-text inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne/30 bg-champagne/5 text-champagne text-xs font-mono tracking-widest mb-8 uppercase backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse"></span>
          Agencia de Inteligencia Artificial
        </div>
        
        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-inter font-bold tracking-tighter leading-[1.05] mb-6 text-ivory">
          Escalar operaciones <br />
          <span className="text-drama text-champagne font-normal text-6xl md:text-8xl lg:text-9xl block mt-1 tracking-normal">sin fricción.</span>
        </h1>
        
        <p className="hero-text text-lg md:text-xl text-ivory/60 max-w-2xl font-inter mb-10 leading-relaxed font-light">
          Diseñamos e implementamos sistemas de IA y automatización para eliminar cuellos de botella, orquestando tu empresa como un reloj de precisión.
        </p>

        <a href="#contacto" className="hero-text relative group overflow-hidden rounded-full px-8 py-4 bg-ivory text-obsidian font-semibold text-lg transition-transform duration-300 hover:scale-[1.03] active:scale-95 inline-flex items-center gap-2">
          <span className="relative z-10 group-hover:text-obsidian transition-colors duration-300 flex items-center gap-2">
            Iniciar Transformación <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-champagne translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
        </a>
      </div>
    </section>
  );
}
