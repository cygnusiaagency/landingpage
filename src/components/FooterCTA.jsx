import React, { useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';

export default function FooterCTA() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbx_vy_c9fHcJm6O-EZMz_sz9GIitB8KMiyZA37kur6yBd5FFAl0BnQRgWTZ0mvVi9KkCQ/exec', {
      method: 'POST',
      body: formData
    })
    .then(() => {
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 6000);
    })
    .catch(error => {
      console.error('Error!', error.message);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    });
  };

  return (
    <footer id="contacto" className="bg-[#0A0A0F] pt-32 pb-12 px-6 rounded-t-[4rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-inter font-bold text-ivory mb-6 tracking-tight">
            Inicia tu <span className="text-drama text-champagne">Transición</span>
          </h2>
          <p className="text-ivory/60 font-inter text-lg max-w-2xl mx-auto font-light">
            Deja tus datos y agenda una auditoría de sistemas sin costo. Analizaremos dónde tu empresa está perdiendo eficiencia y cómo la Inteligencia Artificial puede resolverlo de raíz.
          </p>
        </div>

        <div className="bg-[#121218] rounded-organic border border-white/5 p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-champagne/20 transition-colors duration-700">
          <div className="absolute top-0 right-0 w-96 h-96 bg-champagne/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-champagne/10 transition-colors duration-700"></div>
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-champagne/80 uppercase tracking-widest ml-4">Nombre completo</label>
                <input type="text" name="name" required disabled={status === 'loading'} className="w-full bg-obsidian/50 backdrop-blur-sm border border-white/10 rounded-[2rem] px-6 py-4 text-ivory focus:outline-none focus:border-champagne/50 focus:bg-obsidian transition-all placeholder-white/20 disabled:opacity-50" placeholder="Ej: John Doe" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-champagne/80 uppercase tracking-widest ml-4">Correo corporativo</label>
                <input type="email" name="email" required disabled={status === 'loading'} className="w-full bg-obsidian/50 backdrop-blur-sm border border-white/10 rounded-[2rem] px-6 py-4 text-ivory focus:outline-none focus:border-champagne/50 focus:bg-obsidian transition-all placeholder-white/20 disabled:opacity-50" placeholder="john@empresa.com" />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-mono text-champagne/80 uppercase tracking-widest ml-4">¿Cuál es tu mayor cuello de botella actual?</label>
              <textarea name="message" required rows="3" disabled={status === 'loading'} className="w-full bg-obsidian/50 backdrop-blur-sm border border-white/10 rounded-[2rem] px-6 py-4 text-ivory focus:outline-none focus:border-champagne/50 focus:bg-obsidian transition-all resize-none placeholder-white/20 disabled:opacity-50" placeholder="Detalla brevemente el proceso que más tiempo consume en tu equipo..."></textarea>
            </div>

            {status === 'error' && (
              <div className="text-red-400 text-sm font-inter text-center">Hubo un error al enviar tus datos. Por favor, inténtalo de nuevo.</div>
            )}

            <button type="submit" disabled={status === 'loading' || status === 'success'} className="w-full relative overflow-hidden rounded-[2rem] px-8 py-5 bg-ivory text-obsidian font-bold text-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] mt-4 group/btn disabled:hover:scale-100 disabled:opacity-90">
              <span className="relative z-10 group-hover/btn:text-obsidian transition-colors duration-300 flex items-center justify-center gap-2">
                {status === 'idle' && 'Solicitar Auditoría'}
                {status === 'loading' && <><Loader2 className="w-5 h-5 animate-spin" /> Procesando telemetría...</>}
                {status === 'success' && <><CheckCircle className="w-5 h-5 text-green-600" /> Solicitud Recibida Exitosamente</>}
              </span>
              <div className={`absolute inset-0 bg-champagne translate-y-full transition-transform duration-500 ease-out z-0 ${status === 'idle' ? 'group-hover/btn:translate-y-0' : ''}`}></div>
            </button>
          </form>
        </div>

        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-data text-[10px] text-ivory/30 tracking-widest uppercase">Sistemas Operativos 100%</span>
          </div>
          <div className="text-ivory/30 text-xs font-inter font-light tracking-wide">
            &copy; {new Date().getFullYear()} Cygnus IA. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
