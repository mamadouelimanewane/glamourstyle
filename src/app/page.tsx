import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Booking from '@/components/Booking';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#2D2D2D]">
      <Header />
      <Hero />

      {/* Introduction Section */}
      <section id="experience" className="section py-40 text-center animate-fadeInUp bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[#C5A06B] text-xs uppercase tracking-[8px] font-bold mb-10 block">Heritage & Passion</span>
          <h2 className="text-4xl md:text-6xl mb-10 leading-tight font-heading font-light text-[#2D2D2D]">
            An Unforgettable <br />
            <span className="italic font-serif text-[#C5A06B]">Experience</span>
          </h2>
          <p className="text-[#6B6B6B] text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Located in the heart of Waltham Cross, our studio is a sanctuary dedicated to the artistry of hair.
            By blending ancestral techniques with contemporary innovation, we offer every guest
            a bespoke journey in an atmosphere of serene luxury.
          </p>
          <div className="mt-20 flex justify-center items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="w-20 h-20 bg-[#FAF9F6] rounded-full flex items-center justify-center text-3xl border border-black/5 shadow-sm">🏆</div>
            <div className="w-20 h-20 bg-[#FAF9F6] rounded-full flex items-center justify-center text-3xl border border-black/5 shadow-sm">✨</div>
            <div className="w-20 h-20 bg-[#FAF9F6] rounded-full flex items-center justify-center text-3xl border border-black/5 shadow-sm">💎</div>
          </div>
        </div>
      </section>

      <Services />
      <Gallery />
      <Booking />

      {/* Loyalty Program Highlight */}
      <section className="bg-white py-32 px-6">
        <div className="section">
          <div className="bg-[#FAF9F6] p-10 md:p-20 rounded-[80px] border border-black/5 relative overflow-hidden group shadow-2xl shadow-black/5">
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#C5A06B]/5 blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#C5A06B]/10 transition-all duration-1000" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
              <div>
                <span className="text-[#C5A06B] font-bold uppercase tracking-[6px] text-xs mb-6 block">The Private Collection</span>
                <h2 className="text-4xl md:text-5xl mb-8 font-heading font-light text-[#2D2D2D]">Join Our Exclusive <br /><span className="italic font-serif text-[#C5A06B]">Loyalty Circle</span></h2>
                <p className="text-[#6B6B6B] text-lg mb-10 font-light leading-relaxed">
                  Because your loyalty is a testament to our craft, we invite you to our rewards circle.
                  Enjoy bespoke privileges, from curated discounts to private session invitations.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <button className="px-10 py-5 bg-[#2D2D2D] text-white font-bold text-xs uppercase tracking-[3px] rounded-full hover:bg-[#C5A06B] transition-all shadow-xl active:scale-95">Become a Member</button>
                  <button className="px-10 py-5 bg-transparent border border-[#2D2D2D]/10 text-[#2D2D2D] font-bold text-xs uppercase tracking-[3px] rounded-full hover:bg-white transition-all">Learn More</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[40px] border border-black/5 text-center shadow-premium group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">🎁</div>
                  <h4 className="font-bold text-[#C5A06B] text-2xl mb-1">-10%</h4>
                  <p className="text-[10px] text-[#A8A29E] uppercase tracking-widest font-bold">OFF SESSIONS</p>
                </div>
                <div className="bg-white p-8 rounded-[40px] border border-black/5 text-center shadow-premium group-hover:-translate-y-2 transition-transform duration-500 delay-75">
                  <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">🥂</div>
                  <h4 className="font-bold text-[#C5A06B] text-2xl mb-1">PRIORITY</h4>
                  <p className="text-[10px] text-[#A8A29E] uppercase tracking-widest font-bold">PRE-BOOKING</p>
                </div>
                <div className="bg-white p-8 rounded-[40px] border border-black/5 text-center shadow-premium group-hover:-translate-y-2 transition-transform duration-500 delay-150">
                  <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">💅</div>
                  <h4 className="font-bold text-[#C5A06B] text-2xl mb-1">ELITE</h4>
                  <p className="text-[10px] text-[#A8A29E] uppercase tracking-widest font-bold">GIFT CARE</p>
                </div>
                <div className="bg-white p-8 rounded-[40px] border border-black/5 text-center shadow-premium group-hover:-translate-y-2 transition-transform duration-500 delay-225">
                  <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">🎈</div>
                  <h4 className="font-bold text-[#C5A06B] text-2xl mb-1">FÊTE</h4>
                  <p className="text-[10px] text-[#A8A29E] uppercase tracking-widest font-bold">B-DAY SURPRISE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* BNPL Section (Buy Now, Pay Later) */}
      <section className="section py-40 border-t border-black/5 bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 px-6 font-light">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl mb-8 font-heading text-[#2D2D2D]">Artistry Made <br /><span className="italic font-serif text-[#C5A06B]">Accessible</span></h2>
            <p className="text-[#6B6B6B] text-xl leading-relaxed">
              We believe exceptional beauty should be within reach. Our staggered payment options
              allow you to invest in your transformation with complete peace of mind.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 items-center bg-[#FAF9F6] p-12 rounded-[50px] border border-black/5 shadow-xl shadow-black/5">
            {['Klarna', 'Afterpay', 'Affirm', 'Zip'].map((brand) => (
              <div key={brand} className="text-center group px-4">
                <div className="w-28 h-14 bg-white border border-black/5 rounded-2xl flex items-center justify-center text-[#A8A29E] font-bold group-hover:bg-[#2D2D2D] group-hover:text-white transition-all cursor-crosshair shadow-sm">
                  {brand}
                </div>
                <span className="text-[8px] text-[#A8A29E] mt-4 block uppercase font-bold tracking-[3px]">Elite Partner</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
