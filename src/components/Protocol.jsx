import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card-inner');
      const totalCards = cards.length;

      cards.forEach((card, i) => {
        if (i !== totalCards - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0,
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: `.protocol-wrapper-${i}`,
              start: "top top",
              end: "bottom top",
              scrub: true,
            }
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      id: "01",
      title: "Auditoría Profunda",
      desc: "Mapeamos cada interacción, costo oculto y cuello de botella de tu infraestructura actual. La radiografía exacta de tu eficiencia.",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 text-champagne">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="animate-[spin_40s_linear_infinite]" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" className="animate-[spin_20s_linear_infinite_reverse]" />
          <circle cx="50" cy="50" r="10" fill="currentColor" className="animate-[pulse_3s_ease-in-out_infinite] opacity-50" />
          <path d="M50 0 L50 100 M0 50 L100 50" stroke="currentColor" strokeWidth="0.2" className="opacity-50" />
        </svg>
      )
    },
    {
      id: "02",
      title: "Diseño de Arquitectura",
      desc: "Modelamos un sistema estelar donde los agentes de IA se encargan del volumen masivo y tu equipo humano aporta el valor crítico.",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 text-champagne">
           <polygon points="50 10, 90 80, 10 80" fill="none" stroke="currentColor" strokeWidth="0.5" className="animate-[pulse_4s_ease-in-out_infinite]" />
           <polygon points="50 25, 75 70, 25 70" fill="none" stroke="currentColor" strokeWidth="1" />
           <circle cx="50" cy="55" r="5" fill="currentColor" className="opacity-50" />
           <path d="M50 25 L50 55 M25 70 L50 55 M75 70 L50 55" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      )
    },
    {
      id: "03",
      title: "Despliegue & Calibración",
      desc: "Inyectamos el sistema en tus operaciones. Monitoreamos la telemetría en tiempo real y calibramos los motores para una precisión absoluta.",
      svg: (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 text-champagne">
          <path d="M10 50 Q 25 10, 50 50 T 90 50" fill="none" stroke="currentColor" strokeWidth="1" className="animate-[pulse_2s_ease-in-out_infinite]" />
          <path d="M10 50 Q 25 90, 50 50 T 90 50" fill="none" stroke="currentColor" strokeWidth="1" className="animate-[pulse_2s_ease-in-out_infinite_reverse]" />
          <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        </svg>
      )
    }
  ];

  return (
    <section id="protocolo" ref={containerRef} className="relative bg-obsidian py-32 px-6">
      <div className="max-w-5xl mx-auto mb-24 text-center">
        <span className="font-mono text-xs text-champagne tracking-widest uppercase mb-4 block">Metodología Operativa</span>
        <h2 className="text-4xl md:text-5xl font-inter font-bold text-ivory">
          El Protocolo <span className="text-drama text-champagne">Cygnus</span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className={`protocol-wrapper-${index} sticky top-0 h-screen flex items-center justify-center`}>
            <div className="protocol-card-inner w-full h-[75vh] bg-[#121218] rounded-[3rem] border border-white/5 p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl will-change-transform">
              
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-champagne/5 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[30rem] h-[30rem] pointer-events-none">
                {step.svg}
              </div>
              
              <div className="relative z-10 md:w-1/2 md:pr-12">
                <span className="text-drama text-champagne/30 text-9xl absolute -top-16 -left-8 pointer-events-none select-none">{step.id}</span>
                <div className="relative z-10 mt-12">
                  <h3 className="text-4xl font-inter font-bold text-ivory mb-6 tracking-tight">{step.title}</h3>
                  <p className="text-ivory/60 font-inter text-lg leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
