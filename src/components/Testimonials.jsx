// src/components/Testimonials.jsx
import { useEffect, useState, useRef } from 'react';

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef(null);
  
  const testimonials = [
    {
      id: 1,
      name: "Adi Pratama",
      role: "Pendaki Gunung",
      quote: "Ambivert selalu menemani saya saat mendaki. Kualitas air yang murni dan kemasan yang ringan membuatnya sangat praktis untuk dibawa ke mana saja. Rasanya memang beda!",
      image: "/public/assets/testimonials/testimonial-1.jpg", // Gambar testimonial 1
      rating: 5
    },
    {
      id: 2,
      name: "Dian Kusuma",
      role: "Ibu Rumah Tangga",
      quote: "Sebagai ibu, saya sangat peduli dengan kualitas air yang diminum keluarga. Ambivert memberikan ketenangan pikiran karena saya tahu airnya benar-benar dari sumber pegunungan alami.",
      image: "/public/assets/testimonials/testimonial-2.jpg", // Gambar testimonial 2
      rating: 5
    },
    {
      id: 3,
      name: "Budi Santoso",
      role: "Pemilik Cafe",
      quote: "Para pelanggan kami sangat mengapresiasi ketika kami menyajikan Ambivert. Mereka bisa merasakan perbedaan kualitas dari air mineral biasa. Pelayanan pengiriman galonnya juga sangat tepat waktu.",
      image: "/public/assets/testimonials/testimonial-3.jpg", // Gambar testimonial 3
      rating: 5
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Setup parallax effect and animation on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetSection = sectionRef.current;
      
      if (targetSection) {
        const particles = targetSection.querySelectorAll('.testimonial-particle');
        const cards = targetSection.querySelectorAll('.testimonial-card');
        
        particles.forEach((particle, index) => {
          const speed = 0.02 + (index % 3) * 0.01;
          particle.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
        
        cards.forEach((card) => {
          if (card.getBoundingClientRect().top < window.innerHeight * 0.8) {
            card.classList.add('visible');
          }
        });
      }
    };
    
    // Testimonial rotation
    const rotateInterval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 7000);
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(rotateInterval);
    };
  }, [testimonials.length]);

  return (
    <section 
      id="testimoni" 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden py-24"
    >
      {/* Dynamic Gradient Background - berbeda dari About & Features */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#003b57] via-[#00506b] to-[#006680] z-0"></div>
      
      {/* Decorative background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circular gradient radial */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-radial from-[#83e4e2]/10 to-transparent blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-radial from-[#00a0b0]/10 to-transparent blur-3xl opacity-20"></div>
        
        {/* Abstract light beams */}
        <div className="absolute w-full h-full overflow-hidden">
          <div className="absolute top-0 -left-[300px] h-[2px] w-[700px] bg-gradient-to-r from-transparent via-[#83e4e2]/80 to-transparent rotate-[30deg] blur-sm animate-beam-slide" style={{ animationDuration: '15s' }}></div>
          <div className="absolute top-[20%] -right-[300px] h-[1px] w-[500px] bg-gradient-to-r from-transparent via-[#ffffff]/50 to-transparent -rotate-[20deg] blur-sm animate-beam-slide" style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
          <div className="absolute bottom-[30%] -left-[200px] h-[2px] w-[600px] bg-gradient-to-r from-transparent via-[#00a0b0]/60 to-transparent rotate-[15deg] blur-sm animate-beam-slide" style={{ animationDuration: '18s', animationDelay: '6s' }}></div>
        </div>
      </div>
      
      {/* Floating quote particles */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="testimonial-particle absolute opacity-20 text-white animate-float-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 16 + 14}px`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
            '--random-x': `${Math.random() * 200 - 100}px`,
            '--random-y': `${Math.random() * -200 - 50}px`,
            '--random-r': `${Math.random() * 360}deg`
          }}
        >
          {/* Random quote icons */}
          {Math.random() > 0.5 ? '"' : "'"}
        </div>
      ))}

      <div className="container mx-auto px-4 z-10 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-6xl font-bold text-white mb-4 testimonial-glow">
              Testimoni
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#83e4e2] via-[#83e4e2] to-transparent mx-auto rounded-full"></div>
            <p className="text-[#83e4e2]/80 mt-6 text-xl max-w-2xl mx-auto">
              Apa kata mereka tentang Ambivert
            </p>
          </div>
        </div>
        
        {/* Desktop Testimonial Cards */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`testimonial-card bg-[#ffffff08] backdrop-filter backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl overflow-hidden relative transition-all duration-700 transform opacity-0 translate-y-10`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Quote decoration */}
              <div className="absolute top-6 right-6 text-6xl opacity-10 font-serif">"</div>
              
              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#ffdd00]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              {/* Quote text */}
              <p className="text-white/90 mb-8 italic leading-relaxed relative z-10">"{testimonial.quote}"</p>
              
              {/* Author info with elegant border */}
              <div className="flex items-center border-t border-white/10 pt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#83e4e2]/50 mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/48?text=A';
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-[#83e4e2] font-bold">{testimonial.name}</h4>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Highlight glow effect on hover */}
              <div className="absolute inset-0 opacity-0 bg-gradient-to-br from-[#83e4e2]/5 to-transparent transition-opacity duration-300 hover:opacity-100"></div>
            </div>
          ))}
        </div>
        
        {/* Mobile Testimonial Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="bg-[#ffffff08] backdrop-filter backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
                    {/* Rating stars */}
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#ffdd00]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    
                    {/* Quote text */}
                    <p className="text-white/90 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                    
                    {/* Author info */}
                    <div className="flex items-center border-t border-white/10 pt-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#83e4e2]/50 mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'https://via.placeholder.com/48?text=A';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-[#83e4e2] font-bold">{testimonial.name}</h4>
                        <p className="text-white/70 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Carousel indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === index ? 'bg-[#83e4e2] w-6' : 'bg-white/30 hover:bg-white/50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom wave effect */}
      <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden z-1">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                fill="#00506b" opacity="0.5"></path>
        </svg>
      </div>
    </section>
  );
}

export default Testimonials;