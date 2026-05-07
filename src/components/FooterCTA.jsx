import React, { useState, useEffect, useRef } from 'react';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OBJECTIONS = [
  { q: '"¿Y si no funciona para mi industria?"', a: 'Hemos implementado sistemas en +12 industrias. Adaptamos el modelo a tu contexto específico.' },
  { q: '"¿Cuánto tiempo lleva implementar?"', a: 'Primera fase operativa en 30 días. Sin interrumpir tu flujo actual.' },
  { q: '"¿Necesito cambiar toda mi infraestructura?"', a: 'Nos integramos a tu stack actual. No reemplazamos, potenciamos lo que ya tienes.' },
];

export default function FooterCTA() {
  const [status, setStatus] = useState('idle');
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.cta-headline',
        { y: 50, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 1.1, ease: 'power3.out',
          scrollTrigger: { trigger: '.cta-headline', start: 'top 90%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo('.cta-form-wrap',
        { y: 50, autoAlpha: 0 },
        {
          y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: '.cta-form-wrap', start: 'top 90%', toggleActions: 'play none none none' }
        }
      );
      gsap.utils.toArray('.objection-item').forEach((item, i) => {
        gsap.fromTo(item,
          { y: 30, autoAlpha: 0 },
          {
            y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out', delay: i * 0.12,
            scrollTrigger: { trigger: item, start: 'top 92%', toggleActions: 'play none none none' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target;
    const formData = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycbx_vy_c9fHcJm6O-EZMz_sz9GIitB8KMiyZA37kur6yBd5FFAl0BnQRgWTZ0mvVi9KkCQ/exec', {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 8000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 6000);
      });
  };

  return (
    <footer id="contacto" ref={sectionRef} className="bg-[#080810] pt-36 pb-12 px-6 rounded-t-[4rem] relative z-20 shadow-[0_-30px_80px_rgba(0,0,0,0.6)] overflow-hidden">

      {/* Ambient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-champagne/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-champagne/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Headline */}
        <div className="text-center mb-12">
          <span className="cta-headline font-mono text-[11px] text-champagne tracking-[0.25em] uppercase mb-6 block">Auditoría Gratuita · Sin Compromiso</span>
          <h2 className="cta-headline text-4xl md:text-6xl lg:text-7xl font-inter font-black text-ivory tracking-tight leading-tight mb-6">
            Cada semana que esperas,<br />
            <span className="text-drama text-champagne font-normal">tu competencia te alcanza.</span>
          </h2>
          <p className="text-ivory/55 font-inter text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Una conversación de 30 minutos. Nosotros llegamos con el diagnóstico de tus procesos ya hecho. Tú decides si seguimos. Sin presión. Sin letra pequeña.
          </p>
        </div>

        {/* Urgency bar */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="font-mono text-[10px] text-ivory/40 tracking-widest uppercase">Agenda disponible esta semana · Solo 3 slots restantes</span>
        </div>

        {/* Form */}
        <div className="cta-form-wrap bg-[#0F0F1A] rounded-[3rem] border border-white/5 p-8 md:p-14 shadow-2xl relative overflow-hidden group hover:border-champagne/15 transition-colors duration-700 mb-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-champagne/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-champagne/8 transition-colors duration-700" />

          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-champagne/70 uppercase tracking-widest ml-4">Nombre completo</label>
                <input
                  type="text" name="name" required disabled={status === 'loading'}
                  className="w-full bg-obsidian/60 backdrop-blur-sm border border-white/8 rounded-[2rem] px-6 py-4 text-ivory focus:outline-none focus:border-champagne/50 focus:bg-obsidian transition-all placeholder-white/15 disabled:opacity-50 text-sm"
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-champagne/70 uppercase tracking-widest ml-4">Correo corporativo</label>
                <input
                  type="email" name="email" required disabled={status === 'loading'}
                  className="w-full bg-obsidian/60 backdrop-blur-sm border border-white/8 rounded-[2rem] px-6 py-4 text-ivory focus:outline-none focus:border-champagne/50 focus:bg-obsidian transition-all placeholder-white/15 disabled:opacity-50 text-sm"
                  placeholder="tu@empresa.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-mono text-champagne/70 uppercase tracking-widest ml-4">¿Cuál es el proceso que más te cuesta dinero hoy?</label>
              <textarea
                name="message" required rows="3" disabled={status === 'loading'}
                className="w-full bg-obsidian/60 backdrop-blur-sm border border-white/8 rounded-[2rem] px-6 py-4 text-ivory focus:outline-none focus:border-champagne/50 focus:bg-obsidian transition-all resize-none placeholder-white/15 disabled:opacity-50 text-sm"
                placeholder="Ej: seguimiento manual de leads, atención al cliente 24/7, reportes que toman horas..."
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm font-inter bg-red-400/5 border border-red-400/20 rounded-2xl px-5 py-3">
                <AlertCircle className="w-4 h-4 shrink-0" />
                Error al enviar. Por favor intenta de nuevo.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full relative overflow-hidden rounded-[2rem] px-8 py-5 bg-ivory text-obsidian font-black text-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] group/btn disabled:hover:scale-100 disabled:opacity-90"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {status === 'idle' && 'Quiero Mi Auditoría Gratuita →'}
                {status === 'loading' && <><Loader2 className="w-5 h-5 animate-spin" /> Procesando solicitud...</>}
                {status === 'success' && <><CheckCircle className="w-5 h-5 text-green-600" /> ¡Listo! Te contactamos en menos de 24h.</>}
              </span>
              <div className={`absolute inset-0 bg-champagne translate-y-full transition-transform duration-500 ease-out z-0 ${status === 'idle' ? 'group-hover/btn:translate-y-0' : ''}`} />
            </button>

            <p className="text-center font-mono text-[10px] text-ivory/25 tracking-wide">
              Sin spam · Sin vendedores · Solo una conversación honesta sobre tus operaciones.
            </p>
          </form>
        </div>

        {/* Objections */}
        <div className="mb-20">
          <p className="text-center font-mono text-[10px] text-ivory/30 tracking-widest uppercase mb-8">Respondemos tus dudas antes de que las hagas</p>
          <div className="grid md:grid-cols-3 gap-4">
            {OBJECTIONS.map((item, i) => (
              <div key={i} className="objection-item bg-white/2 border border-white/5 rounded-3xl p-6 hover:border-champagne/20 transition-colors duration-300">
                <p className="font-inter text-sm text-ivory/70 italic mb-3 font-light">{item.q}</p>
                <p className="font-mono text-[10px] text-champagne/60 tracking-wide leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-data text-[10px] text-ivory/30 tracking-widest uppercase">Todos los sistemas operativos · 99.9% uptime</span>
          </div>
          <div className="text-ivory/25 text-xs font-inter font-light tracking-wide">
            &copy; {new Date().getFullYear()} Cygnus IA. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
