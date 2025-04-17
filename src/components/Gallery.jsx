// src/components/Gallery.jsx
import { useEffect, useState, useRef } from 'react';


// Catatan: Ganti path sesuai lokasi gambar Anda
const galleryImages = [
  {
    id: 1,
    title: 'Varian Lengkap',
    description: 'Tersedia dalam 4 ukuran untuk setiap kebutuhan Anda',
    image: '/images/gallery/varian-lengkap.png',
    category: 'produk'
  },
  {
    id: 2,
    title: 'Kesegaran Alami',
    description: 'Air murni dari sumber pegunungan alami',
    image: '/images/gallery/kesegaran-alami.png',
    category: 'alam'
  },
  {
    id: 3,
    title: 'Momen Aktif',
    description: 'Menemani aktivitas outdoor Anda',
    image: '/images/gallery/momen-aktif.png',
    category: 'lifestyle'
  },
  {
    id: 4,
    title: 'Produksi Higienis',
    description: 'Diproduksi dengan standar higienis tertinggi',
    image: '/images/gallery/produksi-higienis.png',
    category: 'produksi'
  },
  {
    id: 5,
    title: 'Galon 19L',
    description: 'Praktis untuk kebutuhan rumah dan kantor',
    image: '/images/gallery/galon-ambivert.png',
    category: 'produk'
  },
  {
    id: 6,
    title: 'Setiap Momen',
    description: 'Menemani setiap momen dalam hidup Anda',
    image: '/images/gallery/setiap-momen.png',
    category: 'lifestyle'
  }
];

function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetSection = sectionRef.current;
      
      if (targetSection) {
        const galleryItems = targetSection.querySelectorAll('.gallery-card');
        const particles = targetSection.querySelectorAll('.gallery-particle');
        
        particles.forEach((particle, index) => {
          const speed = 0.02 + (index % 3) * 0.01;
          particle.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
        
        galleryItems.forEach((item) => {
          if (item.getBoundingClientRect().top < window.innerHeight) {
            item.classList.add('visible');
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    // Intersection Observer for card animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.gallery-card').forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.querySelectorAll('.gallery-card').forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  const filteredImages = selectedCategory === 'semua' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section 
      id="galeri" 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden py-20"
    >
      {/* Dynamic Gradient Background - berbeda dari About & Features */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b2b45] via-[#1c3b5a] to-[#2d4b70] z-0"></div>
      
      {/* Abstract wave patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2383e4e2' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px'
        }}></div>
      </div>
      
      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i}
          className="gallery-particle absolute rounded-full bg-white/10 backdrop-blur-sm animate-float-particle z-1"
          style={{
            width: `${Math.random() * 8 + 3}px`,
            height: `${Math.random() * 8 + 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
            '--random-x': `${Math.random() * 200 - 100}px`,
            '--random-y': `${Math.random() * -200 - 50}px`,
            '--random-r': `${Math.random() * 360}deg`
          }}
        ></div>
      ))}

      <div className="container mx-auto px-4 z-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-6xl font-bold text-white inline-block relative pb-2 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="gallery-title-glow">
              Galeri Produk
              <div className="w-full h-1 bg-gradient-to-r from-[#83e4e2] via-[#83e4e2] to-transparent mt-2 rounded-full"></div>
            </span>
          </h2>
          <p className="text-[#83e4e2]/80 mt-4 text-xl max-w-2xl mx-auto">
            Jelajahi ragam produk Ambivert dalam berbagai momen dan ukuran
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['semua', 'produk', 'alam', 'lifestyle', 'produksi'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-white backdrop-blur-sm transition-all ${
                selectedCategory === category 
                  ? 'bg-[#00a0b0] shadow-lg shadow-[#00a0b0]/20' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredImages.map((item, index) => (
            <div 
              key={item.id}
              className={`gallery-card bg-black/20 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden shadow-xl relative transition-all duration-700 transform opacity-0 translate-y-10`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
                
                <div className={`absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 ${activeIndex === index ? 'translate-y-0' : 'translate-y-10 opacity-0'}`}>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-[#83e4e2]">{item.description}</p>
                </div>
                
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-[#00a0b0]/80 backdrop-blur-sm rounded-full text-sm text-white font-medium">
                    {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom decorative wave */}
      <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden z-1">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="#00364d" opacity="0.5"></path>
        </svg>
      </div>
    </section>
  );
}

export default Gallery;