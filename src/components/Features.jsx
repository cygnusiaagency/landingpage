import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Network, Database, Zap } from 'lucide-react';

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="soluciones" ref={sectionRef} className="py-32 px-6 bg-obsidian relative z-10 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-ivory mb-4">
            Ingeniería de <span className="text-drama text-champagne text-5xl md:text-6xl">Precisión</span>
          </h2>
          <p className="text-ivory/60 font-inter max-w-2xl mx-auto text-lg">
            Sistemas automatizados que transforman la complejidad operativa en un flujo continuo y escalable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Escalar */}
          <div className="feature-card rounded-organic bg-slate/30 border border-white/5 p-8 relative overflow-hidden group hover:border-champagne/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
              <Network className="w-32 h-32 text-champagne" strokeWidth={0.5} />
            </div>
            
            {/* Micro-UI: Card Shuffler */}
            <div className="h-32 mb-10 relative">
               <div className="absolute inset-0 bg-obsidian/50 rounded-2xl border border-white/5 flex items-center justify-center -rotate-6 transform transition-all duration-500 group-hover:-rotate-12 group-hover:-translate-x-2"></div>
               <div className="absolute inset-0 bg-obsidian/80 rounded-2xl border border-white/10 flex items-center justify-center rotate-3 transform transition-all duration-500 group-hover:rotate-6 group-hover:translate-x-2"></div>
               <div className="absolute inset-0 bg-[#1A1A24] rounded-2xl border border-champagne/20 flex flex-col items-center justify-center transform transition-transform duration-500 shadow-xl group-hover:scale-105">
                 <span className="text-data text-[10px] text-champagne/70 mb-2 tracking-widest">ESTADO DEL SISTEMA</span>
                 <span className="font-inter font-bold text-xl text-ivory tracking-wide">Escala Ilimitada</span>
               </div>
            </div>

            <h3 className="text-2xl font-inter font-bold text-ivory mb-3">Escalar sin invertir</h3>
            <p className="text-ivory/60 font-inter leading-relaxed text-sm font-light">
              Crece sin la fricción de multiplicar tus costos fijos. Implementamos agentes que absorben el volumen de trabajo como una extensión natural de tu equipo.
            </p>
          </div>

          {/* Card 2: Cuellos de botella */}
          <div className="feature-card rounded-organic bg-slate/30 border border-white/5 p-8 relative overflow-hidden group hover:border-champagne/30 transition-colors duration-500">
            {/* Micro-UI: Telemetry Typewriter */}
            <div className="h-32 mb-10 relative rounded-2xl bg-obsidian border border-white/10 p-5 font-mono text-xs overflow-hidden flex flex-col justify-end shadow-inner">
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-champagne animate-pulse"></div>
              <div className="text-ivory/30 mb-2">&gt; ANALIZANDO FLUJOS...</div>
              <div className="text-ivory/50 mb-2">&gt; DETECTANDO FRICCIÓN...</div>
              <div className="text-champagne/80 mb-2 transition-all duration-500 group-hover:translate-x-2">&gt; RESOLVIENDO CUELLO DE BOTELLA</div>
              <div className="text-ivory flex items-center gap-2 transition-all duration-500 group-hover:translate-x-2">
                <span>&gt; OPTIMIZADO: 100%</span>
                <span className="w-1.5 h-3 bg-champagne animate-pulse"></span>
              </div>
            </div>

            <h3 className="text-2xl font-inter font-bold text-ivory mb-3">Eliminar fricción</h3>
            <p className="text-ivory/60 font-inter leading-relaxed text-sm font-light">
              Identificamos y suprimimos los cuellos de botella que retrasan tus operaciones, creando sistemas donde la información fluye de manera instantánea y precisa.
            </p>
          </div>

          {/* Card 3: Eficiencia */}
          <div className="feature-card rounded-organic bg-slate/30 border border-white/5 p-8 relative overflow-hidden group hover:border-champagne/30 transition-colors duration-500">
            {/* Micro-UI: Protocol Scheduler */}
            <div className="h-32 mb-10 relative rounded-2xl bg-obsidian border border-white/10 p-5 overflow-hidden">
               <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/10">
                 <span className="text-data text-[10px] text-ivory/40 tracking-widest">CRONOGRAMA</span>
                 <span className="text-data text-[9px] text-obsidian font-bold bg-champagne px-2 py-0.5 rounded-sm">AUTO</span>
               </div>
               <div className="space-y-3 relative z-0">
                 <div className="h-2 bg-slate/50 rounded-full w-full overflow-hidden"><div className="h-full bg-champagne rounded-full w-3/4 transition-all duration-1000 group-hover:w-full"></div></div>
                 <div className="h-2 bg-slate/50 rounded-full w-full overflow-hidden"><div className="h-full bg-champagne/70 rounded-full w-1/2 transition-all duration-1000 group-hover:w-[90%] delay-100"></div></div>
                 <div className="h-2 bg-slate/50 rounded-full w-full overflow-hidden"><div className="h-full bg-champagne/40 rounded-full w-[85%] transition-all duration-1000 group-hover:w-[95%] delay-200"></div></div>
                 
                 {/* Animated cursor */}
                 <svg className="absolute -top-1 left-1/3 w-4 h-4 text-ivory drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-1000 group-hover:translate-x-20 group-hover:translate-y-4 z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="currentColor"/>
                 </svg>
               </div>
            </div>

            <h3 className="text-2xl font-inter font-bold text-ivory mb-3">Duplicar eficiencia</h3>
            <p className="text-ivory/60 font-inter leading-relaxed text-sm font-light">
              Automatizamos tareas repetitivas y predictibles, permitiendo que tu equipo humano se enfoque exclusivamente en la estrategia de alto nivel y el cierre de ventas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
