import { Phone, MapPin, Mail, Instagram, Facebook, Twitter, ShoppingBag, Users, Shield, Clock, TrendingUp, Star } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-emerald-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">StyleHub</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-600 transition">Home</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-emerald-600 transition">Products</button>
              <button onClick={() => scrollToSection('categories')} className="text-gray-700 hover:text-emerald-600 transition">Categories</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-emerald-600 transition">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-600 transition">Contact</button>
            </div>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Elevate Your Style with <span className="text-emerald-600">Fashion</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover premium quality clothing for the whole family. From trendy outfits to timeless classics, find your perfect style at unbeatable prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition flex items-center justify-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl"
                >
                  <Phone className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  <MapPin className="h-5 w-5" />
                  Visit Our Store
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Fashion Banner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Star className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">4.9/5</p>
                    <p className="text-sm text-gray-600">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Our best-selling items this season</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Classic Cotton T-Shirt', price: 29.99, image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Denim Jacket', price: 89.99, image: 'https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Summer Dress', price: 59.99, image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Casual Sneakers', price: 79.99, image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400' }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-80 rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-emerald-600">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find the perfect outfit for everyone</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Men\'s Collection', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Stylish & Contemporary' },
              { title: 'Women\'s Collection', image: 'https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Elegant & Trendy' },
              { title: 'Kids Collection', image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=600', desc: 'Comfortable & Fun' }
            ].map((category, index) => (
              <div key={index} className="group relative h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{category.title}</h3>
                  <p className="text-lg opacity-90">{category.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About StyleHub</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Welcome to StyleHub, your destination for premium quality clothing at affordable prices. Since our inception, we've been committed to bringing the latest fashion trends to our community while maintaining exceptional quality standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our store offers a carefully curated selection of clothing for men, women, and children. We believe that great style should be accessible to everyone, and we work tirelessly to ensure every customer leaves our store feeling confident and satisfied.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Store Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
            <p className="text-xl text-gray-600">Experience the difference with StyleHub</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Premium Quality', desc: 'Only the finest fabrics and materials' },
              { icon: TrendingUp, title: 'Latest Trends', desc: 'Stay ahead with fashion-forward styles' },
              { icon: Users, title: 'Expert Staff', desc: 'Friendly and knowledgeable assistance' },
              { icon: Clock, title: 'Fast Service', desc: 'Quick and efficient shopping experience' }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-8 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
            <p className="text-xl text-gray-600">See what's in store for you</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400'
            ].map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us Today</h2>
            <p className="text-xl text-gray-600">We'd love to see you in store</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-4 rounded-lg">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Store Address</h3>
                  <p className="text-gray-600">123 Fashion Street, Style District<br/>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-4 rounded-lg">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (234) 567-890</p>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:text-emerald-700 font-semibold"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-4 rounded-lg">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@stylehub.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-4 rounded-lg">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br/>
                    Sunday: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2164074951896!2d-73.98823492346618!3d40.75798073522474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fdc5d4a507%3A0x2e1fbb6e0f1e7a0d!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1710500000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <ShoppingBag className="h-8 w-8 text-emerald-500" />
                <span className="ml-2 text-2xl font-bold">StyleHub</span>
              </div>
              <p className="text-gray-400">Your destination for premium fashion at affordable prices.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-emerald-500 transition">Home</button></li>
                <li><button onClick={() => scrollToSection('products')} className="text-gray-400 hover:text-emerald-500 transition">Products</button></li>
                <li><button onClick={() => scrollToSection('categories')} className="text-gray-400 hover:text-emerald-500 transition">Categories</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-emerald-500 transition">About</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Men's Fashion</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Women's Fashion</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Kids Fashion</a></li>
                <li><a href="#" className="text-gray-400 hover:text-emerald-500 transition">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StyleHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
