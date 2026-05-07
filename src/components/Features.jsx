import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Network, Cpu, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LOGS = [
  { t: '00:00:01', msg: '> INICIANDO DIAGNÓSTICO...', c: 'text-ivory/30' },
  { t: '00:00:03', msg: '> FRICCIÓN DETECTADA: Alta', c: 'text-red-400/80' },
  { t: '00:00:05', msg: '> CUELLO DE BOTELLA: Eliminado', c: 'text-champagne/80' },
  { t: '00:00:07', msg: '> SISTEMA OPTIMIZADO: 100%', c: 'text-green-400' },
];

function TelemetryMicroUI() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (visibleCount < LOGS.length) {
      const t = setTimeout(() => setVisibleCount(v => v + 1), 900);
      return () => clearTimeout(t);
    }
    const loop = setInterval(() => {
      setVisibleCount(0);
    }, 4000);
    return () => clearInterval(loop);
  }, [visibleCount]);

  useEffect(() => {
    const b = setInterval(() => setBlink(v => !v), 500);
    return () => clearInterval(b);
  }, []);

  return (
    <div className="h-36 mb-8 relative rounded-2xl bg-obsidian border border-white/10 p-5 font-mono text-xs overflow-hidden flex flex-col justify-end shadow-inner">
      <div className="absolute top-3 right-3 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-red-500/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      </div>
      <div className="space-y-1">
        {LOGS.slice(0, visibleCount).map((l, i) => (
          <div key={i} className={`flex gap-3 ${l.c} transition-all duration-300`}>
            <span className="text-ivory/20 shrink-0">{l.t}</span>
            <span>{l.msg}</span>
          </div>
        ))}
        {visibleCount < LOGS.length && (
          <span className={`inline-block w-1.5 h-3.5 bg-champagne transition-opacity duration-100 ${blink ? 'opacity-100' : 'opacity-0'}`} />
        )}
      </div>
    </div>
  );
}

function ScaleBarMicroUI() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const bars = [
    { label: 'Mes 1', before: 28, after: 28 },
    { label: 'Mes 2', before: 28, after: 52 },
    { label: 'Mes 3', before: 28, after: 91 },
  ];

  return (
    <div ref={ref} className="h-36 mb-8 relative rounded-2xl bg-obsidian border border-white/10 p-5 overflow-hidden">
      <span className="font-mono text-[9px] text-ivory/40 tracking-widest uppercase mb-4 block">Capacidad Operativa</span>
      <div className="flex items-end gap-4 h-20">
        {bars.map((b, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
            <div className="w-full flex gap-1 items-end justify-center" style={{ height: '60px' }}>
              <div className="flex-1 bg-white/10 rounded-sm transition-all duration-1000" style={{ height: `${(b.before / 100) * 60}px`, transitionDelay: `${i * 150}ms` }} />
              <div
                className="flex-1 bg-champagne rounded-sm transition-all duration-1000"
                style={{ height: `${active ? (b.after / 100) * 60 : (b.before / 100) * 60}px`, transitionDelay: `${i * 200 + 300}ms` }}
              />
            </div>
            <span className="font-mono text-[8px] text-ivory/30">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CostMicroUI() {
  const [pct, setPct] = useState(100);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let v = 100;
        const t = setInterval(() => {
          v -= 1.5;
          setPct(Math.max(27, Math.round(v)));
          if (v <= 27) clearInterval(t);
        }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-36 mb-8 relative rounded-2xl bg-obsidian border border-white/10 p-5 overflow-hidden flex flex-col justify-between">
      <span className="font-mono text-[9px] text-ivory/40 tracking-widest uppercase">Costo por Proceso</span>
      <div className="flex items-end gap-4">
        <div>
          <div className="font-inter font-black text-4xl text-champagne leading-none">{pct}%</div>
          <div className="font-mono text-[9px] text-ivory/40 mt-1">del costo original</div>
        </div>
        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-champagne rounded-full transition-all duration-75"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
      <div className="font-mono text-[9px] text-green-400">▼ −{100 - pct}% REDUCCIÓN EN 90 DÍAS</div>
    </div>
  );
}

const CARDS = [
  {
    icon: <BarChart3 className="w-5 h-5" />,
    tag: 'ESCALABILIDAD SIN LÍMITE',
    title: 'Crece ×10 sin contratar ×10',
    body: 'Tus competidores necesitan 10 personas para hacer lo que tus agentes de IA harán solos. Absorbe el volumen sin tocar tu nómina.',
    micro: <ScaleBarMicroUI />,
    highlight: 'El volumen que rechazas hoy, mañana es ingreso capturado.',
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    tag: 'ELIMINACIÓN DE FRICCIÓN',
    title: 'Cada hora de proceso manual es dinero tirado',
    body: 'Mapeamos cada cuello de botella y lo reemplazamos con automatización quirúrgica. Tu equipo deja de apagar incendios y empieza a construir.',
    micro: <TelemetryMicroUI />,
    highlight: 'Un proceso optimizado no se cansa, no falla, no se va de vacaciones.',
  },
  {
    icon: <Network className="w-5 h-5" />,
    tag: 'EFICIENCIA RADICAL',
    title: 'Mismos resultados. 73% menos costo.',
    body: 'Automatizamos lo predecible para que lo extraordinario lo haga tu equipo. Rentabilidad que se mide desde el primer mes.',
    micro: <CostMicroUI />,
    highlight: 'No es tecnología. Es ventaja competitiva que dura años.',
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.feat-title', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        y: 50, opacity: 0, duration: 1, ease: 'power3.out',
      });
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        y: 70, opacity: 0, duration: 0.9, stagger: 0.18, ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="soluciones" ref={sectionRef} className="py-36 px-6 bg-obsidian relative z-10 w-full">

      {/* Section label */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="feat-title flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[11px] text-champagne tracking-[0.25em] uppercase mb-4 block">Propuesta de Valor</span>
            <h2 className="text-4xl md:text-5xl font-inter font-black text-ivory leading-tight tracking-tight">
              La IA no es el futuro.<br />
              <span className="text-drama text-champagne text-5xl md:text-6xl font-normal">Es la ventaja que ya perdiste.</span>
            </h2>
          </div>
          <p className="text-ivory/50 font-inter max-w-sm text-base leading-relaxed font-light md:text-right">
            Mientras lees esto, empresas de tu sector ya están operando 3 veces más rápido con la mitad del personal.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {CARDS.map((c, i) => (
          <div
            key={i}
            className="feature-card rounded-[2.5rem] bg-[#0F0F16] border border-white/5 p-8 relative overflow-hidden group hover:border-champagne/25 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(201,168,76,0.08)] flex flex-col"
          >
            {/* Corner glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-champagne/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-champagne/12 transition-colors duration-700" />

            {/* Tag */}
            <div className="flex items-center gap-2 mb-6">
              <span className="p-2 rounded-xl bg-champagne/10 text-champagne">{c.icon}</span>
              <span className="font-mono text-[9px] text-champagne/60 tracking-widest uppercase">{c.tag}</span>
            </div>

            {/* Micro UI */}
            {c.micro}

            {/* Copy */}
            <h3 className="text-xl font-inter font-black text-ivory mb-3 leading-tight">{c.title}</h3>
            <p className="text-ivory/55 font-inter leading-relaxed text-sm font-light mb-6 flex-1">{c.body}</p>

            {/* Bottom highlight */}
            <div className="pt-5 border-t border-white/5">
              <p className="font-mono text-[10px] text-champagne/70 leading-relaxed">{c.highlight}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
