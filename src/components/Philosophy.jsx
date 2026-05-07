import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TRUTHS = [
  'Tu proceso de ventas sigue dependiendo de una persona.',
  'Si un empleado clave falta, la operación se detiene.',
  'Tu crecimiento está limitado por tu nómina.',
  'Estás pagando por errores humanos todos los meses.',
];

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax background
      gsap.to('.parallax-bg', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Left side fade-slide
      gsap.from('.phil-left', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        x: -60, opacity: 0, duration: 1.1, ease: 'power3.out',
      });

      // Right side fade-slide
      gsap.from('.phil-right', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        x: 60, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.15,
      });

      // Pain items stagger
      gsap.from('.pain-item', {
        scrollTrigger: { trigger: '.pain-list', start: 'top 75%' },
        x: -30, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
      });

      // Line draw on the divider
      gsap.from('.divider-line', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 50%' },
        scaleY: 0, duration: 1.2, ease: 'power3.out', transformOrigin: 'top',
      });

      // Counter animation
      gsap.from('.counter-num', {
        scrollTrigger: { trigger: '.counter-num', start: 'top 80%' },
        textContent: 0,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        stagger: 0.2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="filosofia" ref={sectionRef} className="py-40 px-6 relative overflow-hidden bg-obsidian flex items-center justify-center min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574621100236-d25b64dc8089?q=80&w=2564&auto=format&fit=crop"
          alt="Dark texture"
          className="parallax-bg w-full h-[130%] object-cover opacity-[0.12] scale-105 origin-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/85 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
      </div>

      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-champagne/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-20">
          <span className="font-mono text-[11px] text-champagne tracking-[0.25em] uppercase mb-4 block">El Diagnóstico Incómodo</span>
          <h2 className="text-4xl md:text-6xl font-inter font-black text-ivory tracking-tight leading-tight">
            Tu empresa tiene un problema<br />
            <span className="text-drama text-champagne/90 font-normal">que nadie te está diciendo.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1px_1fr] gap-0 items-start">
          {/* LEFT: The pain */}
          <div className="phil-left pr-8 md:pr-16 pb-12 md:pb-0">
            <div className="mb-8">
              <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase border border-white/10 px-3 py-1 rounded-full">El problema que ignoras</span>
            </div>
            <p className="font-inter text-2xl font-light text-ivory/80 mb-10 leading-relaxed">
              No es falta de talento, ni de capital. Es que estás construyendo un edificio de 30 pisos sobre una base de procesos diseñados para el piso 2.
            </p>
            <div className="pain-list space-y-4">
              {TRUTHS.map((t, i) => (
                <div key={i} className="pain-item flex items-start gap-4 group">
                  <div className="w-5 h-5 rounded-full border border-red-500/30 bg-red-500/5 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-500/15 transition-colors duration-300">
                    <span className="text-red-400 text-xs font-bold">✕</span>
                  </div>
                  <p className="font-inter text-sm text-ivory/50 leading-relaxed font-light">{t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="divider-line hidden md:block w-px bg-gradient-to-b from-transparent via-champagne/20 to-transparent self-stretch" />

          {/* RIGHT: The solution */}
          <div className="phil-right pl-0 md:pl-16 pt-12 md:pt-0">
            <div className="mb-8">
              <span className="font-mono text-[10px] text-champagne tracking-widest uppercase border border-champagne/20 bg-champagne/5 px-3 py-1 rounded-full">El estándar Cygnus</span>
            </div>
            <h3 className="font-inter font-black text-3xl md:text-4xl text-ivory mb-6 leading-tight">
              Mientras los demás automatizan tareas,<br />
              <span className="text-drama text-champagne font-normal text-4xl md:text-5xl">nosotros orquestamos sistemas.</span>
            </h3>
            <div className="bg-gradient-to-br from-champagne/8 to-champagne/3 border border-champagne/20 rounded-3xl p-8 backdrop-blur-sm mb-10">
              <p className="font-inter text-base text-ivory/80 leading-relaxed font-light">
                No entregamos un chatbot y nos vamos. Diseñamos una arquitectura donde cada proceso, cada decisión y cada interacción con el cliente está calibrada para operar sola, escalar sola y mejorar sola.
                <span className="block mt-4 text-ivory font-medium">Eso se llama ventaja operacional irreversible.</span>
              </p>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: '90', unit: 'días', label: 'Para ver ROI' },
                { num: '3', unit: 'x', label: 'Más velocidad' },
                { num: '0', unit: 'h', label: 'De supervisión' },
              ].map((s, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-white/3 border border-white/5 hover:border-champagne/20 transition-colors duration-300">
                  <div className="font-inter font-black text-2xl text-champagne">
                    <span className="counter-num">{s.num}</span><span className="text-base">{s.unit}</span>
                  </div>
                  <div className="font-mono text-[9px] text-ivory/40 tracking-widest mt-1 uppercase">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
