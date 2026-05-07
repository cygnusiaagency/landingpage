import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: '10×', label: 'Velocidad Operativa' },
  { value: '−73%', label: 'Costos de Proceso' },
  { value: '24/7', label: 'Sin Intervención Humana' },
];

export default function Hero() {
  const heroRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered entrance
      const tl = gsap.timeline({ delay: 0.1 });

      tl.from('.hero-badge', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' })
        .from('.hero-headline-1', { y: 80, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.4')
        .from('.hero-headline-2', { y: 80, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.7')
        .from('.hero-sub', { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
        .from('.hero-cta', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
        .from('.hero-stat', { y: 30, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out' }, '-=0.4');

      // Slow Ken Burns on bg
      gsap.to('.hero-image', { scale: 1.08, duration: 18, ease: 'none' });

      // Floating orb
      gsap.to('.hero-orb', {
        y: -24,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      // Horizontal scan line
      gsap.fromTo('.hero-scanline', { x: '-100%' }, {
        x: '100%',
        duration: 3.5,
        ease: 'none',
        repeat: -1,
        repeatDelay: 2,
      });

      // Parallax on scroll
      gsap.to('.hero-content', {
        y: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-[100dvh] w-full flex items-end justify-center overflow-hidden bg-obsidian">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Dark abstract marble"
          className="hero-image w-full h-full object-cover opacity-35 mix-blend-luminosity scale-100 origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-obsidian/40 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian" />
      </div>

      {/* Floating champagne orb */}
      <div className="hero-orb absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-champagne/10 blur-[120px] pointer-events-none z-0" />

      {/* Scan line */}
      <div className="absolute top-0 left-0 w-full h-[1px] z-20 overflow-hidden">
        <div className="hero-scanline w-1/3 h-full bg-gradient-to-r from-transparent via-champagne/60 to-transparent" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Content */}
      <div className="hero-content relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 flex flex-col items-center text-center">

        <div className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full border border-champagne/30 bg-champagne/5 text-champagne text-[11px] font-mono tracking-[0.25em] mb-10 uppercase backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
          Sistemas de IA · Automatización de Operaciones
        </div>

        <h1 className="font-inter font-black tracking-tighter leading-[0.95] mb-6">
          <span className="hero-headline-1 block text-5xl md:text-7xl lg:text-[6.5rem] text-ivory">
            Tu empresa pierde dinero
          </span>
          <span className="hero-headline-2 block text-drama text-champagne text-6xl md:text-8xl lg:text-[8rem] font-normal tracking-normal mt-2">
            cada hora que opera manual.
          </span>
        </h1>

        <p className="hero-sub text-base md:text-xl text-ivory/55 max-w-2xl font-inter mb-10 leading-relaxed font-light">
          Implementamos inteligencia artificial que trabaja mientras tú duermes. Sin contratar más personal. Sin triplicar costos. <span className="text-ivory/90 font-medium">Sin excusas.</span>
        </p>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 mb-16">
          <a
            href="#contacto"
            className="relative group overflow-hidden rounded-full px-8 py-4 bg-ivory text-obsidian font-bold text-base transition-transform duration-300 hover:scale-[1.04] active:scale-95 inline-flex items-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              Auditoría Gratuita — Sin Compromiso
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-champagne translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
          </a>
          <a
            href="#soluciones"
            className="rounded-full px-8 py-4 border border-white/15 text-ivory/70 font-inter text-base hover:border-champagne/40 hover:text-ivory transition-all duration-300 inline-flex items-center gap-2"
          >
            Ver Cómo Funciona
          </a>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden w-full max-w-xl">
          {STATS.map((s, i) => (
            <div key={i} className="hero-stat bg-obsidian/80 backdrop-blur-sm py-5 flex flex-col items-center gap-1 hover:bg-slate/30 transition-colors duration-300">
              <span className="font-inter font-black text-2xl text-champagne tracking-tight">{s.value}</span>
              <span className="font-mono text-[9px] text-ivory/40 tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
