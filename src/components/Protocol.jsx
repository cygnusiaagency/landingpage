import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: '01',
    tag: 'SEMANA 1',
    title: 'Radiografía Total',
    subtitle: 'Encontramos lo que te cuesta dinero y nadie ha cuantificado.',
    desc: 'En 5 días mapeamos cada proceso, cada handoff manual, cada cuello de botella. No generamos un PDF. Generamos un plan de acción con un número exacto de lo que estás perdiendo cada mes.',
    proof: 'Promedio detectado: $18,000 USD/mes en ineficiencias ocultas.',
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full text-champagne">
        <defs>
          <radialGradient id="pg1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#pg1)" />
        <circle cx="100" cy="100" r="75" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 6" className="animate-[spin_60s_linear_infinite]" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 4" className="animate-[spin_30s_linear_infinite_reverse]" />
        <circle cx="100" cy="100" r="32" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="8" fill="currentColor" className="opacity-60" />
        <circle cx="100" cy="25" r="4" fill="currentColor" className="opacity-50 animate-pulse" />
        <circle cx="175" cy="100" r="4" fill="currentColor" className="opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="100" cy="175" r="4" fill="currentColor" className="opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
        <circle cx="25" cy="100" r="4" fill="currentColor" className="opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }} />
      </svg>
    ),
  },
  {
    id: '02',
    tag: 'SEMANA 2-3',
    title: 'Arquitectura de Sistemas',
    subtitle: 'Diseñamos el sistema operativo de tu empresa del futuro.',
    desc: 'Cada agente tiene un rol, un objetivo y una métrica. Tus flujos dejan de depender de quién está en la oficina ese día. El sistema sabe qué hacer antes de que tú lo pienses.',
    proof: 'Resultado: una empresa que opera igual si tienes 2 o 200 clientes simultáneos.',
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full text-champagne">
        <polygon points="100,15 185,155 15,155" fill="none" stroke="currentColor" strokeWidth="0.6" className="opacity-20 animate-[pulse_5s_ease-in-out_infinite]" />
        <polygon points="100,40 162,140 38,140" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-30" />
        <polygon points="100,70 135,128 65,128" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-50" />
        <line x1="100" y1="40" x2="100" y2="100" stroke="currentColor" strokeWidth="0.8" className="opacity-40" />
        <line x1="38" y1="140" x2="100" y2="100" stroke="currentColor" strokeWidth="0.8" className="opacity-40" />
        <line x1="162" y1="140" x2="100" y2="100" stroke="currentColor" strokeWidth="0.8" className="opacity-40" />
        <circle cx="100" cy="100" r="6" fill="currentColor" className="opacity-70" />
        <circle cx="100" cy="40" r="4" fill="currentColor" className="opacity-50 animate-pulse" />
        <circle cx="38" cy="140" r="4" fill="currentColor" className="opacity-50 animate-pulse" style={{ animationDelay: '0.7s' }} />
        <circle cx="162" cy="140" r="4" fill="currentColor" className="opacity-50 animate-pulse" style={{ animationDelay: '1.4s' }} />
      </svg>
    ),
  },
  {
    id: '03',
    tag: 'SEMANA 4',
    title: 'Despliegue & Resultado',
    subtitle: 'Operativo. Medido. Rentable desde el día uno.',
    desc: 'Inyectamos el sistema en tus operaciones con zero downtime. Entregamos un dashboard de telemetría en tiempo real. Tú ves los números. Nosotros calibramos hasta que el ROI sea imposible de ignorar.',
    proof: 'Garantía: si no hay mejora en 30 días, seguimos trabajando sin costo adicional.',
    svg: (
      <svg viewBox="0 0 200 200" className="w-full h-full text-champagne">
        <path d="M20 140 Q 50 60, 100 100 T 180 60" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60 animate-[pulse_3s_ease-in-out_infinite]" />
        <path d="M20 140 Q 50 60, 100 100 T 180 60" fill="none" stroke="currentColor" strokeWidth="8" strokeOpacity="0.05" />
        <path d="M20 160 Q 50 80, 100 120 T 180 80" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 6" className="opacity-20" />
        <circle cx="180" cy="60" r="6" fill="currentColor" className="animate-pulse opacity-80" />
        <circle cx="20" cy="140" r="4" fill="currentColor" className="opacity-40" />
        <circle cx="100" cy="100" r="4" fill="currentColor" className="opacity-50" />
      </svg>
    ),
  },
];

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card-inner');

      // Scale-out stacking effect
      cards.forEach((card, i) => {
        if (i !== cards.length - 1) {
          gsap.to(card, {
            scale: 0.88,
            autoAlpha: 0,
            y: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: `.proto-wrap-${i}`,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocolo" ref={containerRef} className="relative bg-obsidian py-32 px-6">
      <div className="max-w-5xl mx-auto mb-24 text-center">
        <span className="font-mono text-[11px] text-champagne tracking-[0.25em] uppercase mb-4 block">Metodología Operativa</span>
        <h2 className="text-4xl md:text-6xl font-inter font-black text-ivory tracking-tight leading-tight">
          De cero a resultados<br />
          <span className="text-drama text-champagne font-normal">en 30 días. No en 6 meses.</span>
        </h2>
        <p className="text-ivory/50 font-inter text-lg mt-6 max-w-xl mx-auto font-light">
          El tiempo que tardas en evaluarnos es tiempo que tu competencia usa para ganar clientes que deberían ser tuyos.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className={`proto-wrap-${index} sticky top-0 h-screen flex items-center justify-center`}>
            <div className="protocol-card-inner w-full h-[78vh] bg-[#0E0E18] rounded-[3rem] border border-white/5 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl will-change-transform hover:border-champagne/15 transition-colors duration-700">

              {/* Background glow */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-champagne/4 rounded-full blur-[120px] pointer-events-none" />

              {/* Number watermark — bottom-right corner, purely decorative */}
              <span className="text-drama text-champagne/[0.06] text-[18rem] font-black absolute -bottom-16 -right-8 pointer-events-none select-none leading-none z-0">
                {step.id}
              </span>

              {/* SVG decoration — centered on right half */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 pointer-events-none opacity-20 hidden md:block">
                {step.svg}
              </div>

              {/* Content — fully isolated from number watermark */}
              <div className="relative z-10 md:w-[58%] flex flex-col">

                {/* Tag badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne/25 bg-champagne/5 mb-8 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
                  <span className="font-mono text-[10px] text-champagne tracking-widest uppercase">{step.tag}</span>
                </div>

                {/* Step number pill — small, elegant */}
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-inter font-black text-champagne/30 text-5xl leading-none">{step.id}</span>
                  <h3 className="text-3xl md:text-4xl font-inter font-black text-ivory tracking-tight leading-tight">
                    {step.title}
                  </h3>
                </div>

                <p className="text-drama text-champagne/80 text-xl font-normal mb-6 ml-[3.5rem]">
                  {step.subtitle}
                </p>
                <p className="text-ivory/55 font-inter text-base leading-relaxed font-light mb-8 ml-[3.5rem] max-w-md">
                  {step.desc}
                </p>

                <div className="flex items-start gap-3 bg-champagne/5 border border-champagne/15 rounded-2xl px-6 py-4 ml-[3.5rem] max-w-md">
                  <span className="text-champagne font-bold text-lg shrink-0 mt-0.5">→</span>
                  <p className="font-mono text-[11px] text-champagne/80 leading-relaxed">{step.proof}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
