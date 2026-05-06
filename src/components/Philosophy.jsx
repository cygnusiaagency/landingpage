import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Philosophy() {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".parallax-bg", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      
      gsap.from(".phil-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="filosofia" ref={sectionRef} className="py-40 px-6 relative overflow-hidden bg-obsidian flex items-center justify-center min-h-[80vh]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1574621100236-d25b64dc8089?q=80&w=2564&auto=format&fit=crop" 
          alt="Dark marble texture" 
          className="parallax-bg w-full h-[120%] object-cover opacity-[0.15] scale-105 origin-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h2 className="phil-text text-3xl md:text-4xl font-inter font-bold text-ivory mb-8">
              El mercado te vende <br/>
              <span className="text-drama text-white/30 line-through decoration-champagne/40">herramientas sueltas.</span>
            </h2>
            <div className="phil-text space-y-6">
              <div className="pl-6 border-l border-white/10 opacity-50">
                <p className="font-mono text-xs tracking-widest text-white/50 mb-3">STATUS QUO</p>
                <p className="font-inter text-base leading-relaxed font-light">
                  Agencias tradicionales entregan chatbots aislados o scripts desconectados, añadiendo más capas de software a un ecosistema que ya es caótico y fragmentado.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="phil-text text-3xl md:text-5xl font-inter font-bold text-ivory mb-8">
              Nosotros orquestamos <br/>
              <span className="text-drama text-champagne text-5xl md:text-7xl block mt-2">Sistemas.</span>
            </h2>
            <div className="phil-text space-y-6">
              <div className="pl-6 border-l-2 border-champagne bg-champagne/5 p-6 rounded-r-2xl backdrop-blur-sm">
                <p className="font-mono text-xs tracking-widest text-champagne mb-3">EL ESTÁNDAR CYGNUS</p>
                <p className="font-inter text-lg leading-relaxed text-ivory/90 font-light">
                  Implementamos inteligencia artificial que se fusiona profundamente con tus operaciones. Un ecosistema unificado que califica leads, toma decisiones y opera 24/7 con una precisión absoluta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
