// src/components/ContactForm.jsx
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import bottle330ml from "../assets/products/330ml.png";
import bottle600ml from "../assets/products/600ml.png";
import bottle1_5L from "../assets/products/1.5L.png";
import bottleGalon from "../assets/products/galon.png";

function ContactForm() {
  const formRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    variant: '600ml',
    quantity: 1,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('600ml');
  const sectionRef = useRef(null);

  // Varian produk Ambivert
  const variants = [
    { id: '330ml', name: '330ml', image: bottle330ml, price: 3500 },
    { id: '600ml', name: '600ml', image: bottle600ml, price: 5000 },
    { id: '1.5L', name: '1.5L', image: bottle1_5L, price: 8000 },
    { id: '19L', name: 'Galon 19L', image: bottleGalon, price: 25000 },
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetSection = sectionRef.current;
      
      if (targetSection) {
        const particles = targetSection.querySelectorAll('.order-particle');
        
        particles.forEach((particle, index) => {
          const speed = 0.03 + (index % 3) * 0.01;
          particle.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'variant') {
      setSelectedVariant(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Ganti dengan ID dari akun email.js Anda
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      formRef.current, 
      'YOUR_USER_ID'
    )
      .then((result) => {
        setSubmitStatus({
          success: true,
          message: 'Pesanan berhasil dikirim! Kami akan menghubungi Anda segera.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          variant: '600ml',
          quantity: 1,
          message: ''
        });
      }, (error) => {
        setSubmitStatus({
          success: false,
          message: 'Maaf, terjadi kesalahan. Silakan coba lagi.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
        
        // Auto-dismiss status message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      });
  };

  // Find current variant
  const currentVariant = variants.find(v => v.id === selectedVariant) || variants[0];
  const total = currentVariant.price * formData.quantity;

  return (
    <section 
      id="pemesanan" 
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Dynamic Gradient Background - berbeda dari section lain */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004a67] via-[#005f7a] to-[#00718c] z-0"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNMzAgNS4yNUEyNC43NSAyNC43NSAwIDEgMCAzMCA1NC43NSAyNC43NSAyNC43NSAwIDEgMCAzMCA1LjI1em0wIDRBMjAuNzUgMjAuNzUgMCAxIDEgMzAgNTAuNzUgMjAuNzggMjAuNzggMCAwIDEgMzAgOS4yNXptMCA0LjVBMTYuMjUgMTYuMjUgMCAxIDAgMzAgNDYuMjUgMTYuMjUgMTYuMjUgMCAwIDAgMzAgMTMuNzV6bTAgNC41QTExLjc1IDExLjc1IDAgMSAxIDMwIDQxLjc1IDExLjc3IDExLjc3IDAgMCAxIDMwIDE4LjI1em0wIDQuNUE3LjI1IDcuMjUgMCAxIDAgMzAgMzcuMjUgNy4yNSA3LjI1IDAgMCAwIDMwIDIyLjc1em0wIDQuNUEyLjc1IDIuNzUgMCAxIDEgMzAgMzIuNzUgMi43NSAyLjc1IDAgMCAxIDMwIDI3LjI1eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]"></div>
        </div>
        
        {/* Light beams */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="light-beam absolute w-[150%] h-[2px] bg-gradient-to-r from-transparent via-[#83e4e2]/20 to-transparent -rotate-[30deg] animate-beam" style={{animationDuration: '25s', top: '30%'}}></div>
          <div className="light-beam absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#ffffff]/15 to-transparent rotate-[20deg] animate-beam" style={{animationDuration: '18s', animationDelay: '3s', top: '60%'}}></div>
        </div>
        
        {/* Floating bubble particles */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="order-particle absolute rounded-full bg-[#83e4e2]/20 backdrop-blur-sm animate-float-particle"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              '--random-x': `${Math.random() * 200 - 100}px`,
              '--random-y': `${Math.random() * -200 - 50}px`,
              '--random-r': `${Math.random() * 360}deg`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-6xl font-bold text-white mb-4 order-title-glow">
              Pemesanan
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#83e4e2] via-[#83e4e2] to-transparent mx-auto rounded-full"></div>
            <p className="text-[#83e4e2]/80 mt-6 text-xl max-w-2xl mx-auto">
              Dapatkan kesegaran Ambivert langsung diantar ke lokasi Anda
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form Side */}
          <div className={`relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white/10 backdrop-filter backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl">
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-500/20 text-green-100' : 'bg-red-500/20 text-red-100'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {/* Nama */}
                  <div>
                    <label className="block text-white mb-2 font-medium" htmlFor="name">Nama Lengkap</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#83e4e2] focus:border-transparent text-white"
                      required
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  
                  {/* Email & Phone side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white mb-2 font-medium" htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#83e4e2] focus:border-transparent text-white"
                        required
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2 font-medium" htmlFor="phone">No. Telepon</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#83e4e2] focus:border-transparent text-white"
                        required
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>
                  
                  {/* Alamat */}
                  <div>
                    <label className="block text-white mb-2 font-medium" htmlFor="address">Alamat Pengiriman</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#83e4e2] focus:border-transparent text-white"
                      required
                      placeholder="Masukkan alamat lengkap pengiriman"
                      rows={3}
                    />
                  </div>
                  
                  {/* Variant & Quantity side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white mb-2 font-medium" htmlFor="variant">Varian Produk</label>
                      <select
                        id="variant"
                        name="variant"
                        value={formData.variant}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#83e4e2] focus:border-transparent text-white"
                        required
                      >
                        {variants.map(variant => (
                          <option key={variant.id} value={variant.id}>{variant.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white mb-2 font-medium" htmlFor="quantity">Jumlah</label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min="1"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#83e4e2] focus:border-transparent text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label className="block text-white mb-2 font-medium" htmlFor="message">Catatan (Opsional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#83e4e2] focus:border-transparent text-white"
                      placeholder="Tambahkan catatan khusus untuk pesanan Anda"
                      rows={2}
                    />
                  </div>
                </div>
                
                {/* Total harga */}
                <div className="bg-[#00506b] p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-white">Total :</span>
                    <span className="text-[#83e4e2] text-xl font-bold">Rp {total.toLocaleString('id-ID')}</span>
                  </div>
                </div>
                
                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#00a0b0] to-[#008191] hover:from-[#00b1c2] hover:to-[#0091a3] text-white text-lg font-bold rounded-lg shadow-lg transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,160,176,0.4)] focus:outline-none focus:ring-2 focus:ring-[#83e4e2] focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmitting ? 'Memproses...' : 'Kirim Pesanan'}
                </button>
              </form>
            </div>
          </div>
          
          {/* Product Display Side */}
          <div className={`flex flex-col items-center justify-center transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Product image with reflection */}
              <div className="relative animate-float-slow mb-6">
                <img 
                  src={currentVariant.image}
                  alt={`Ambivert ${currentVariant.name}`}
                  className="max-h-[400px] object-contain mx-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x400?text=Ambivert';
                  }}
                />
                
                {/* Reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                  <div className="w-[80%] h-[20px] bg-[#83e4e2]/20 blur-md rounded-full"></div>
                </div>
              </div>
              
              {/* Product details */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-2">Ambivert {currentVariant.name}</h3>
                <p className="text-[#83e4e2] text-xl font-medium mb-4">Rp {currentVariant.price.toLocaleString('id-ID')}</p>
                <p className="text-white/80 max-w-sm mx-auto">
                  Air mineral segar dari sumber pegunungan alami, tersedia dalam berbagai ukuran untuk kebutuhan Anda.
                </p>
              </div>
              
              {/* Water splash effect */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none">
                <div className="animate-splash opacity-0">
                  <svg width="200" height="50" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
                    <path d="M198.6 20.8c-7.3 5.3-15.2 9.7-23.6 13.3-9.1 3.7-18.5 5.4-28.1 7.6-7.4 1.8-14.9 3.1-22.4 4.3-6.6 1.1-13.2 1.7-19.9 2.2-7.7 0.6-15.3 0.8-23 0.7-3.8 0-7.6-0.1-11.5-0.2-3.8-0.1-7.6-0.4-11.3-0.7-14.9-1.2-29.3-3.5-42.8-8.4C8.7 36.8 2.3 33.7 0 33.3c3.3-3.3 9.5-7.2 14.7-10 5.4-2.8 11.2-5.1 17.1-7 6.2-2 12.5-3.5 18.9-4.6 6.5-1.1 13.1-1.8 19.8-2.2 6.9-0.5 13.7-0.6 20.6-0.5 6.7 0.1 13.4 0.4 20.1 0.9 6.7 0.5 13.4 1.3 20 2.3 10.1 1.7 20.1 4.4 29.9 7.6 9.9 3.3 20.1 7.5 29.3 12.9 2.2 1.5 4.5 2.9 6.7 4.2 2.2 1.3 4.3 2.9 6.4 4.6C207.5 10.1 198.6 20.8 198.6 20.8z" fill="#83e4e2" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Variant thumbnails */}
            <div className="flex justify-center space-x-4 mt-8">
              {variants.map(variant => (
                <button
                  key={variant.id}
                  onClick={() => {
                    setSelectedVariant(variant.id);
                    setFormData(prev => ({...prev, variant: variant.id}));
                  }}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    selectedVariant === variant.id 
                      ? 'bg-[#00a0b0] ring-2 ring-[#83e4e2]' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <img 
                    src={variant.image} 
                    alt={variant.name}
                    className="w-16 h-20 object-contain"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/64x80?text=A';
                    }}
                  />
                  <span className={`block text-sm mt-1 ${
                    selectedVariant === variant.id 
                      ? 'text-white font-medium' 
                      : 'text-white/70'
                  }`}>
                    {variant.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute left-0 right-0 bottom-0 w-full overflow-hidden z-1">
        <svg className="relative block w-full h-[70px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="#00364d" opacity="0.5"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#00364d" opacity="0.3"></path>
        </svg>
      </div>
    </section>
  );
}

export default ContactForm;