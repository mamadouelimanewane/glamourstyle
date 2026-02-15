import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Booking from '@/components/Booking';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      <Hero />

      {/* Introduction Section */}
      <section className="py-32 animate-fadeIn relative bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
          <span className="text-[#D4AF37] text-sm uppercase tracking-[8px] font-black mb-8 block">Heritage & Passion</span>
          <h2 className="mb-10 leading-tight text-black text-3xl md:text-5xl text-center">
            An Unforgettable <br />
            <span className="gradient-text italic font-serif text-4xl md:text-6xl text-center">Experience</span>
          </h2>
          <p className="text-black text-base md:text-lg font-medium leading-relaxed mb-16 max-w-3xl mx-auto text-center">
            Located in the heart of the capital, our salon is a haven of peace dedicated to the art of women's hair.
            Combining traditional techniques with cutting-edge innovations, we offer each client personalized care in an exclusive and refined setting.
          </p>

          <div className="flex justify-center items-center gap-16 md:gap-24">
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-full flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform duration-500">
                <span className="text-black">🏆</span>
              </div>
              <span className="text-black text-[10px] font-black uppercase tracking-widest mt-4">Excellence</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-full flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform duration-500">
                <span className="text-black">✨</span>
              </div>
              <span className="text-black text-[10px] font-black uppercase tracking-widest mt-4">Artistry</span>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-full flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform duration-500">
                <span className="text-black">💎</span>
              </div>
              <span className="text-black text-[10px] font-black uppercase tracking-widest mt-4">Premium</span>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Gallery />
      <Booking />

      {/* Loyalty Program Highlight */}
      <section className="bg-gradient-to-b from-[#0D0D0D] to-[#0A0A0A] py-16 md:py-24">
        <div className="section">
          <div className="glass p-6 md:p-12 rounded-3xl border-2 border-[#D4AF37]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#D4AF37]/20 transition-all duration-700" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-4 block">The Private Circle</span>
                <h2 className="text-2xl md:text-4xl mb-4 md:mb-6 leading-tight">Join Our Exclusive <span className="gradient-text">Loyalty Program</span></h2>
                <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  Because your loyalty deserves to be celebrated, we've created an exclusive rewards program.
                  Enjoy a 10% discount from your 5th visit and receive priority invites to our private events.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Link href="/#reservation" className="btn-primary text-center px-8 py-4">Become a Member</Link>
                  <Link href="/#contact" className="btn-secondary text-center px-8 py-4">Learn More</Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="bg-white/5 p-4 md:p-6 rounded-2xl border border-white/5 text-center">
                  <div className="text-2xl md:text-3xl mb-2">🎁</div>
                  <h4 className="font-bold text-[#D4AF37] text-sm md:text-base">-10%</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-tighter">OFF ALL SERVICES</p>
                </div>
                <div className="bg-white/5 p-4 md:p-6 rounded-2xl border border-white/5 text-center">
                  <div className="text-2xl md:text-3xl mb-2">🥂</div>
                  <h4 className="font-bold text-[#D4AF37] text-sm md:text-base">PRIORITY</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-tighter">EXCLUSIVE PRE-SALES</p>
                </div>
                <div className="bg-white/5 p-4 md:p-6 rounded-2xl border border-white/5 text-center">
                  <div className="text-2xl md:text-3xl mb-2">💅</div>
                  <h4 className="font-bold text-[#D4AF37] text-sm md:text-base">CARE</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-tighter">COMPLIMENTARY SAMPLES</p>
                </div>
                <div className="bg-white/5 p-4 md:p-6 rounded-2xl border border-white/5 text-center">
                  <div className="text-2xl md:text-3xl mb-2">🎈</div>
                  <h4 className="font-bold text-[#D4AF37] text-sm md:text-base">B-DAY</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-tighter">ANNIVERSARY GIFT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* BNPL Section (Buy Now, Pay Later) */}
      <section className="section py-24 border-y border-gray-900">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl mb-6">Payment <span className="gradient-text">Flexibility</span></h2>
            <p className="text-gray-400 text-lg">
              We want our exceptional services to be accessible to all. We offer staggered payment solutions.
              "Buy now, pay later" easily through our trusted partners.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center bg-white/5 p-8 rounded-2xl">
            {['Klarna', 'Afterpay', 'Affirm', 'Zip'].map((brand) => (
              <div key={brand} className="text-center group">
                <div className="w-24 h-12 bg-gray-800 rounded flex items-center justify-center text-gray-400 font-bold group-hover:bg-[#D4AF37] group-hover:text-black transition-all cursor-crosshair">
                  {brand}
                </div>
                <span className="text-[9px] text-gray-600 mt-2 block uppercase font-bold tracking-widest">Official Partner</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
