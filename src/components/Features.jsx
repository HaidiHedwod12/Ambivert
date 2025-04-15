// src/components/Features.jsx
import { useEffect, useState, useRef } from 'react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetSection = sectionRef.current;
      
      if (targetSection) {
        const particles = targetSection.querySelectorAll('.feature-particle');
        const waves = targetSection.querySelectorAll('.wave');
        
        particles.forEach((particle, index) => {
          const speed = 0.02 + (index % 3) * 0.01;
          particle.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
        
        waves.forEach((wave, index) => {
          const speed = 0.01 + (index % 3) * 0.005;
          wave.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: "💧",
      title: "Air Pegunungan Asli",
      description: "Diambil langsung dari sumber alami yang jernih dan segar."
    },
    {
      icon: "♻️",
      title: "Ramah Lingkungan",
      description: "Botol dan galon dapat didaur ulang, ikut menjaga bumi."
    },
    {
      icon: "✅",
      title: "Higienis & Aman",
      description: "Diproses dengan penyaringan modern sesuai standar kesehatan."
    },
    {
      icon: "🎨",
      title: "Desain Modern",
      description: "Kemasan stylish dengan bentuk ergonomis dan label menarik."
    },
    {
      icon: "🌿",
      title: "100% Natural",
      description: "Tanpa bahan tambahan, murni dari kebaikan alam pegunungan."
    },
    {
      icon: "💎",
      title: "Kualitas Premium",
      description: "Kualitas terbaik dengan mineral seimbang untuk tubuh Anda."
    }
  ];

  return (
    <section 
      id="fitur" 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex flex-col justify-center py-20"
    >
      {/* Dynamic Gradient Background - dengan variasi berbeda dari About */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002b42] via-[#004d35] to-[#005e2d] z-0"></div>
      
      {/* Light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
        <div className="light-beam absolute w-[150%] h-[300px] bg-gradient-to-r from-transparent via-[#9cffa6]/5 to-transparent -rotate-45 animate-beam" style={{animationDuration: '20s'}}></div>
        <div className="light-beam absolute w-[150%] h-[200px] bg-gradient-to-r from-transparent via-[#ffffff]/5 to-transparent -rotate-45 animate-beam" style={{animationDuration: '25s', animationDelay: '5s'}}></div>
      </div>
      
      {/* Mountain Silhouette - variasi dari About */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#003b22" 
            fillOpacity="0.5" 
            d="M0,96L60,106.7C120,117,240,139,360,154.7C480,171,600,181,720,170.7C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
          </path>
        </svg>
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#002a1e" 
            fillOpacity="0.7" 
            d="M0,160L48,144C96,128,192,96,288,101.3C384,107,480,149,576,160C672,171,768,149,864,128C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
      
      {/* Animated Water Waves - variasi dari About */}
      <div className="absolute inset-0 overflow-hidden z-1">
        <div className="wave absolute bottom-0 left-0 w-full h-40 opacity-15 animate-wave-slow" style={{ 
          background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%2300a0b0'/%3E%3C/svg%3E\")",
          backgroundSize: "1600px 100%",
          animationDuration: "30s"
        }}></div>
        
        <div className="wave absolute bottom-0 left-0 w-full h-40 opacity-20 animate-wave-slow" style={{ 
          background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 88.7'%3E%3Cpath d='M800 56.9c-155.5 0-204.9-50-405.5-49.9-200 0-250 49.9-394.5 49.9v31.8h800v-.2-31.6z' fill='%2383e4e2'/%3E%3C/svg%3E\")",
          backgroundSize: "1600px 100%",
          animationDelay: "7s", 
          animationDuration: "18s"
        }}></div>
      </div>
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="feature-particle absolute rounded-full bg-white/10 backdrop-blur-sm animate-float-particle"
          style={{
            width: `${Math.random() * 8 + 3}px`,
            height: `${Math.random() * 8 + 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            '--random-x': `${Math.random() * 200 - 100}px`,
            '--random-y': `${Math.random() * -200 - 50}px`,
            '--random-r': `${Math.random() * 360}deg`
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 z-10 relative">
        {/* Judul dengan efek glow yang menarik */}
        <div className="text-center mb-16">
          <h2 className={`text-6xl font-bold text-[#00efff] inline-block pb-2 border-b-4 border-[#83e4e2]/50 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="feature-title-glow relative">
              Fitur Unggulan Ambivert
              <span className="absolute -inset-1 rounded-lg blur-xl bg-[#00efff]/20 animate-pulse-slow opacity-70"></span>
            </span>
          </h2>
        </div>
        
        {/* Grid 3x2 untuk fitur */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card bg-[#ffffff08] backdrop-filter backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-xl overflow-hidden relative transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${100 * index}ms` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-[#83e4e2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
              
              <div className="text-5xl mb-4 feature-icon">
                {feature.icon === "💧" && <span className="text-[#00b8d4] inline-block transform hover:scale-110 transition-transform">💧</span>}
                {feature.icon === "♻️" && <span className="text-[#4caf50] inline-block transform hover:scale-110 transition-transform">♻️</span>}
                {feature.icon === "✅" && <span className="text-[#8bc34a] inline-block transform hover:scale-110 transition-transform">✅</span>}
                {feature.icon === "🎨" && <span className="text-[#ff9800] inline-block transform hover:scale-110 transition-transform">🎨</span>}
                {feature.icon === "🌿" && <span className="text-[#4caf50] inline-block transform hover:scale-110 transition-transform">🌿</span>}
                {feature.icon === "💎" && <span className="text-[#2196f3] inline-block transform hover:scale-110 transition-transform">💎</span>}
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-[#83e4e2]">{feature.title}</h3>
              <p className="text-white/90 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;