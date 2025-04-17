// src/components/Hero.jsx
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="beranda" className="relative w-full h-screen overflow-hidden">
      {/* Background dengan overlay blur */}
      <div className="absolute inset-0">
        <img 
          src="/images/backgrounds/hero-bg.jpg"
          alt="Ambivert Mountain Spring Water" 
          className="w-full h-full object-cover"
        />
        {/* Overlay blur/transparan */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Konten Hero */}
      <div className="relative h-full">
        <div className="container mx-auto px-8 h-full flex items-center">
          {/* Teks di kiri */}
          <div className={`ml-16 md:ml-24 max-w-3xl transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1>
              <div className="text-7xl md:text-8xl font-extrabold text-white leading-tight mb-2 text-shadow-white">
                Ambivert -
              </div>
              <div className="text-7xl md:text-8xl font-extrabold text-[#83e4e2] leading-tight text-shadow-glow">
                Segarnya Bikin<br/>
                Nyatuin Semua
              </div>
            </h1>
            
            <div className="w-32 h-1 bg-white my-6 glow-line"></div>
            
            <a 
              href="#pemesanan" 
              className="group relative inline-flex items-center px-10 py-4 overflow-hidden rounded-full bg-[#00a0b0] text-white font-bold text-xl shadow-lg transition-all duration-300 hover:bg-[#83e4e2] hover:scale-105 hover:shadow-[0_0_15px_rgba(131,228,226,0.5)]"
            >
              <span className="relative z-10">Pesan Sekarang</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#83e4e2]/0 via-[#83e4e2]/30 to-[#83e4e2]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            </a>
          </div>
          
          {/* Produk botol Ambivert */}
          <div className="absolute right-[12%] top-1/2 transform -translate-y-1/2 z-10">
            <div 
              className={`relative transition-all duration-300 animate-pulse-slow ${isHovered ? 'scale-110' : 'scale-100'}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img 
                src="/images/products/ambivert-bottle.png"
                alt="Ambivert Bottle" 
                className="h-[800px] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              />
              
              {/* Highlight glow effect ketika hover */}
              <div className={`absolute inset-0 bg-[#83e4e2]/20 rounded-full filter blur-xl scale-90 transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-0'}`}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Transition blur untuk section berikutnya */}
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-[#004a67] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;