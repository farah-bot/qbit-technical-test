import React, { useState, useEffect } from 'react';
import { Star, Award, Users, Heart, ShoppingCart, MapPin, Phone, Menu, X, Clock, Utensils, Home } from 'lucide-react';

const UMKMLanding: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroImages = [
    'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1563379091339-03246963d51a?w=1920&h=1080&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop'
  ];

  const dimsumProducts = [
    {
      id: 1,
      name: 'Har Gow',
      price: 'Rp 28.000',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300&h=300&fit=crop',
      description: 'Dimsum udang transparan, lezat dan segar',
      rating: 4.9,
      category: 'Kukus',
      isNew: false
    },
    {
      id: 2,
      name: 'Siu Mai Ayam',
      price: 'Rp 26.000',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d51a?w=300&h=300&fit=crop',
      description: 'Dimsum ayam dan udang yang lezat',
      rating: 4.8,
      category: 'Kukus',
      isNew: false
    },
    {
      id: 3,
      name: 'Xiao Long Bao',
      price: 'Rp 32.000',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      description: 'Dimsum berisi kuah hangat yang gurih',
      rating: 4.9,
      category: 'Kukus',
      isNew: false
    },
    {
      id: 4,
      name: 'Bakpao Ayam Panggang',
      price: 'Rp 24.000',
      image: 'https://images.unsplash.com/photo-1551218370-3d44be3b6008?w=300&h=300&fit=crop',
      description: 'Bakpao lembut isi ayam panggang manis',
      rating: 4.7,
      category: 'Kukus',
      isNew: false
    },
    {
      id: 5,
      name: 'Dimsum Mentai',
      price: 'Rp 35.000',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=300&fit=crop',
      description: 'Dimsum viral dengan saus mentai yang creamy',
      rating: 4.9,
      category: 'Bakar',
      isNew: true
    },
    {
      id: 6,
      name: 'Mentai Gyoza',
      price: 'Rp 38.000',
      image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=300&fit=crop',
      description: 'Gyoza crispy dengan topping mentai sauce yang viral',
      rating: 4.8,
      category: 'Bakar',
      isNew: true
    },
    {
      id: 7,
      name: 'Pan Fried Dumpling',
      price: 'Rp 30.000',
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&h=300&fit=crop',
      description: 'Dimsum goreng dengan dasar renyah',
      rating: 4.6,
      category: 'Goreng',
      isNew: false
    },
    {
      id: 8,
      name: 'Spring Roll',
      price: 'Rp 22.000',
      image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=300&fit=crop',
      description: 'Lumpia sayur renyah dan gurih',
      rating: 4.8,
      category: 'Goreng',
      isNew: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const HomePage = () => (
    <>
      <section className="relative h-screen bg-gradient-to-br from-green-600 to-green-800 overflow-hidden">
        <div className="absolute inset-0 bg-green-700/20"></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <div className="mb-6 flex gap-3">
                  <span className="bg-yellow-400 text-green-800 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                    100% Halal
                  </span>
                  <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide animate-pulse">
                    Ada Mentai!
                  </span>
                </div>
                <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  LIL<br />
                  <span className="text-yellow-400">DIMSUM</span>
                </h1>
                <p className="text-xl mb-8 text-green-100 max-w-lg">
                  Dimsum halal dan terjangkau + mentai viral langsung dari dapur kami untuk kamu
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setCurrentPage('menu')}
                    className="bg-yellow-400 hover:bg-yellow-500 text-green-800 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2"
                  >
                    <Utensils className="w-5 h-5" />
                    Lihat Menu
                  </button>
                  <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-green-800 px-8 py-4 rounded-lg font-bold text-lg transition-all">
                    Pesan Sekarang
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <img
                    src={heroImages[currentImage]}
                    alt="Dimsum Lezat"
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                  <div className="mt-6 text-center">
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Fresh & Halal</h3>
                    <p className="text-green-600">Dibuat dengan cinta setiap hari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-green-800 mb-4">Kenapa Pilih Lil Dimsum?</h2>
            <p className="text-xl text-green-600 max-w-2xl mx-auto">
              Rasakan kelezatan dimsum yang autentik, halal, dan terjangkau
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-4">100% Halal</h4>
              <p className="text-green-600">Semua bahan dan proses memasak dijamin halal</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-4">Ada Mentai Viral</h4>
              <p className="text-green-600">Ikuti tren dengan dimsum mentai yang lagi hits!</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-4">Dibuat Fresh</h4>
              <p className="text-green-600">Setiap hari kami buat fresh khusus untuk kamu</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-green-800 mb-4">Harga Bersahabat</h4>
              <p className="text-green-600">Nikmati dimsum enak tanpa perlu khawatir budget</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const MenuPage = () => (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-green-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4 inline-block">
            Menu Halal Kami
          </span>
          <h2 className="text-5xl font-black text-green-800 mb-6">Pilihan Dimsum Fresh</h2>
          <p className="text-xl text-green-600 max-w-3xl mx-auto">
            Dibuat setiap hari dengan resep yang sudah teruji - 100% Halal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dimsumProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                  {product.category}
                </div>
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    VIRAL!
                  </div>
                )}
                <div className={`absolute ${product.isNew ? 'bottom-4' : 'top-4'} left-4 bg-white/90 text-green-800 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1`}>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {product.rating}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-green-800 mb-2">{product.name}</h4>
                <p className="text-green-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-700">
                    {product.price}
                  </span>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-all flex items-center gap-2 font-semibold">
                    <ShoppingCart className="w-4 h-4" />
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-black mb-4">🔥 MENTAI LAGI VIRAL! 🔥</h3>
          <p className="text-xl mb-6">
            Jangan sampai ketinggalan tren! Cobain dimsum mentai yang lagi hits di media sosial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">Dimsum Mentai</div>
              <div className="text-lg">Rp 35.000</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">Mentai Gyoza</div>
              <div className="text-lg">Rp 38.000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const StoryPage = () => (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="bg-yellow-400 text-green-800 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-6 inline-block">
              Cerita Kami
            </span>
            <h2 className="text-5xl font-black text-green-800 mb-8">Dimsum Halal untuk Semua</h2>
            <p className="text-xl text-green-600 mb-6 leading-relaxed">
              Lil Dimsum hadir karena kecintaan kami pada dimsum yang enak, halal, dan berkualitas. 
              Kami percaya bahwa makanan enak tidak harus mahal, dan semua orang berhak 
              menikmati dimsum yang lezat dengan ketenangan hati.
            </p>
            <p className="text-xl text-green-600 mb-8 leading-relaxed">
              Setiap hari, kami membuat dimsum fresh dengan bahan-bahan halal pilihan. 
              Dari dapur kecil kami, kami berkomitmen memberikan yang terbaik 
              untuk pelanggan tercinta. Plus, kami juga ikuti tren dengan menu mentai yang viral!
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-green-50 rounded-xl p-6">
                <div className="text-4xl font-black text-green-700 mb-2">100%</div>
                <div className="text-green-600 font-semibold">Halal & Fresh</div>
              </div>
              <div className="text-center bg-red-50 rounded-xl p-6">
                <div className="text-4xl font-black text-green-700 mb-2">🔥</div>
                <div className="text-green-600 font-semibold">Mentai Viral</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-3xl p-8">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
                alt="Dapur Kami"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black mb-4">Hubungi Kami</h3>
            <p className="text-xl text-green-100">
              Pesan dimsum halal & mentai viral langsung dari kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-green-800" />
              </div>
              <h4 className="text-xl font-bold mb-3">Lokasi</h4>
              <p className="text-green-100">
                Jember, Jawa Timur<br />
                Area Jember dan sekitarnya
              </p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-green-800" />
              </div>
              <h4 className="text-xl font-bold mb-3">WhatsApp</h4>
              <p className="text-green-100">
                Chat langsung untuk pesan<br />
                Respon cepat & ramah
              </p>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-green-800" />
              </div>
              <h4 className="text-xl font-bold mb-3">Jam Buka</h4>
              <p className="text-green-100">
                Senin - Minggu<br />
                08:00 - 20:00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-lg fixed w-full top-0 z-50 border-b-2 border-green-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-green-800">LIL DIMSUM</h1>
                <span className="text-xs text-green-600">Dimsum Halal Jember</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`text-lg font-semibold transition flex items-center gap-2 ${
                  currentPage === 'home' 
                    ? 'text-green-800 bg-yellow-100 px-4 py-2 rounded-lg' 
                    : 'text-green-600 hover:text-green-800'
                }`}
              >
                <Home className="w-4 h-4" />
                Beranda
              </button>
              <button 
                onClick={() => setCurrentPage('menu')}
                className={`text-lg font-semibold transition flex items-center gap-2 ${
                  currentPage === 'menu' 
                    ? 'text-green-800 bg-yellow-100 px-4 py-2 rounded-lg' 
                    : 'text-green-600 hover:text-green-800'
                }`}
              >
                <Utensils className="w-4 h-4" />
                Menu
              </button>
              <button 
                onClick={() => setCurrentPage('story')}
                className={`text-lg font-semibold transition flex items-center gap-2 ${
                  currentPage === 'story' 
                    ? 'text-green-800 bg-yellow-100 px-4 py-2 rounded-lg' 
                    : 'text-green-600 hover:text-green-800'
                }`}
              >
                <Users className="w-4 h-4" />
                Tentang Kami
              </button>
            </nav>

            <button 
              className="md:hidden text-green-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-green-100 pt-4">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => {setCurrentPage('home'); setMobileMenuOpen(false);}}
                  className="text-lg font-semibold text-left py-2 px-4 rounded-lg text-green-600 hover:bg-green-50 flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Beranda
                </button>
                <button 
                  onClick={() => {setCurrentPage('menu'); setMobileMenuOpen(false);}}
                  className="text-lg font-semibold text-left py-2 px-4 rounded-lg text-green-600 hover:bg-green-50 flex items-center gap-2"
                >
                  <Utensils className="w-4 h-4" />
                  Menu
                </button>
                <button 
                  onClick={() => {setCurrentPage('story'); setMobileMenuOpen(false);}}
                  className="text-lg font-semibold text-left py-2 px-4 rounded-lg text-green-600 hover:bg-green-50 flex items-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  Tentang Kami
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="pt-20">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'menu' && <MenuPage />}
        {currentPage === 'story' && <StoryPage />}
      </div>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Utensils className="w-8 h-8 text-yellow-400" />
            <h4 className="text-2xl font-black">LIL DIMSUM</h4>
          </div>
          <p className="text-green-200 mb-4">
            Dimsum Halal & Mentai Viral
          </p>
          <p className="text-sm text-green-300">
            © 2025 Lil Dimsum Jember - 100% Halal
          </p>
        </div>
      </footer>
    </div>
  );
};

export default UMKMLanding;