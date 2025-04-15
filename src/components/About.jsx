// src/components/About.jsx
import { useEffect, useState, useRef } from 'react';
import ambivertLogo from '../assets/logos/ambivert-logo.png';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetSection = sectionRef.current;
      
      if (targetSection) {
        const particles = targetSection.querySelectorAll('.mountain-particle');
        const waves = targetSection.querySelectorAll('.wave');
        
        particles.forEach((particle, index) => {
          const speed = 0.03 + (index % 5) * 0.01;
          particle.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
        
        waves.forEach((wave, index) => {
          const speed = 0.02 + (index % 3) * 0.01;
          wave.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="tentang-produk" 
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Dynamic Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#001e38] via-[#004a67] to-[#006a88]"></div>
      
      {/* Mountain Silhouette */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#002f47" 
            fillOpacity="0.5" 
            d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,229.3C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
          </path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#001a2e" 
            fillOpacity="0.7" 
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
      
      {/* Animated Water Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="wave absolute bottom-0 left-0 w-full h-40 opacity-20 animate-wave-slow" style={{ 
          background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%2300a0b0'/%3E%3C/svg%3E\")",
          backgroundSize: "1600px 100%",
          animationDuration: "25s"
        }}></div>
        
        <div className="wave absolute bottom-0 left-0 w-full h-40 opacity-30 animate-wave-slow" style={{ 
          background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%2383e4e2'/%3E%3C/svg%3E\")",
          backgroundSize: "1600px 100%",
          animationDelay: "5s", 
          animationDuration: "20s"
        }}></div>
        
        <div className="wave absolute bottom-0 left-0 w-full h-40 opacity-20 animate-wave-slow" style={{ 
          background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%23ffffff'/%3E%3C/svg%3E\")",
          backgroundSize: "1600px 100%",
          animationDelay: "10s",
          animationDuration: "15s"
        }}></div>
      </div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="mountain-particle absolute rounded-full bg-white/10 backdrop-blur-sm animate-float-particle"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
            '--random-x': `${Math.random() * 200 - 100}px`,
            '--random-y': `${Math.random() * -200 - 50}px`,
            '--random-r': `${Math.random() * 360}deg`
          }}
        ></div>
      ))}
      
      {/* Light Beams Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="light-beam absolute w-[150%] h-[300px] bg-gradient-to-r from-transparent via-[#83e4e2]/10 to-transparent -rotate-45 animate-beam"></div>
        <div className="light-beam absolute w-[150%] h-[200px] bg-gradient-to-r from-transparent via-[#ffffff]/5 to-transparent -rotate-45 animate-beam" style={{animationDelay: '7s'}}></div>
      </div>

      <div className="container mx-auto px-4 h-full z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Konten kiri dengan efek yang ditingkatkan */}
          <div className={`md:ml-24 max-w-2xl mt-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="glass-card p-8 rounded-2xl shadow-xl">
              <h2 className="text-7xl md:text-8xl font-bold mb-8 text-white text-shadow-elegant">
                Tentang<br />
                <span className="text-gradient-blue-teal">Ambivert</span>
              </h2>
              
              <div className="w-40 h-1.5 bg-gradient-to-r from-[#00a0b0] to-[#83e4e2] rounded-full glow-line mb-10"></div>
              
              <div className="description-content">
                <p className="mb-6 text-[#e6f7f8] leading-relaxed">
                  <span className="text-2xl font-semibold text-white">Ambivert</span> adalah air minum kemasan dari 
                  <span className="text-[#83e4e2] font-medium"> sumber pegunungan alami </span>
                  yang jernih dan menyegarkan. Dikemas dengan desain yang modern, ringan, dan cocok untuk 
                  <span className="italic"> semua gaya hidup</span>
                  <span className="text-[#83e4e2]"> — dari yang aktif, santai, hingga seimbang.</span>
                </p>
                
                <p className="mb-6 pl-4 border-l-4 border-[#83e4e2] text-[#e6f7f8]">
                  Tersedia dalam empat varian ukuran:
                  <span className="block mt-2 pl-3 font-medium">
                    <span className="text-[#83e4e2]">330ml</span> · 
                    <span className="text-[#83e4e2]">600ml</span> · 
                    <span className="text-[#83e4e2]">1.5L</span> · 
                    <span className="text-[#83e4e2]">19L</span> galon
                  </span>
                </p>
                
                <p className="text-xl text-white font-medium italic">
                  Ambivert selalu siap menemani setiap momenmu, 
                  <span className="block">dari yang personal hingga kebersamaan.</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Logo di kanan (dengan efek hover yang hanya scale) */}
          <div className={`mt-12 md:mt-0 md:-mr-20 lg:-mr-40 xl:-mr-60 transition-all duration-1500 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div 
              className="relative animate-pulse-light transition-transform duration-300"
              style={{ transformOrigin: 'center' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img 
                src={ambivertLogo} 
                alt="Ambivert Logo" 
                className="w-auto h-[1000px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;