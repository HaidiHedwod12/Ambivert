// src/components/Navbar.jsx
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Menambahkan scroll-behavior: smooth ke HTML (CSS approach)
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Cleanup scroll behavior
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  // Fungsi untuk smooth scroll dengan JavaScript (lebih halus dan konsisten)
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false); // Tutup mobile menu jika terbuka
    
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;
    
    const navbarHeight = 80; // Perkiraan tinggi navbar
    const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  const menuItems = [
    { name: 'Beranda', id: 'beranda' },
    { name: 'Tentang Produk', id: 'tentang-produk' },
    { name: 'Fitur', id: 'fitur' },
    { name: 'Galeri', id: 'galeri' },
    { name: 'Testimoni', id: 'testimoni' },
    { name: 'Pemesanan', id: 'pemesanan' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className={`
          ${scrolled ? 'bg-[#005a77] bg-opacity-40' : 'bg-gradient-to-r from-[#004a67]/30 to-[#006a87]/30'} 
          backdrop-filter backdrop-blur-sm 
          rounded-full px-4 md:px-8 py-3 md:py-4
          border border-[#2aa8c5]/20
          shadow-lg shadow-[#003a57]/10
          transition-all duration-300
        `}>
          <div className="flex justify-between items-center">
            <a 
              href="#beranda" 
              onClick={(e) => scrollToSection(e, 'beranda')}
              className="text-white text-2xl md:text-3xl font-bold flex items-center"
            >
              <span className="text-[#83e4e2] mr-1">●</span> Ambivert
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 lg:space-x-10">
              {menuItems.map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="text-white hover:text-[#83e4e2] font-medium transition-all duration-300 hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-[#83e4e2] transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-[#005a77] bg-opacity-95 backdrop-filter backdrop-blur-sm rounded-xl border border-[#2aa8c5]/20 shadow-lg overflow-hidden animate-fadeIn">
            <div className="py-4">
              {menuItems.map((item, index) => (
                <a 
                  key={index}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    scrollToSection(e, item.id);
                    setIsOpen(false);
                  }}
                  className="block px-6 py-3 text-white hover:bg-white/10 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;