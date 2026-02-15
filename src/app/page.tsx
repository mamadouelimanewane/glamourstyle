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
      {/* Introduction Section */}
      {/* Introduction Section */}
      <section className="section py-32 text-center animate-fadeIn">
        <div className="max-w-4xl mx-auto">
          <span className="text-[#D4AF37] text-sm uppercase tracking-[6px] font-bold mb-8 block">Héritage et passion</span>
          <h2 className="mb-8 leading-tight">
            Une expérience <br />
            <span className="gradient-text italic font-serif">inoubliable</span>
          </h2>
          <p className="text-gray-400 text-xl font-light leading-relaxed">
            Situé au cœur de la capitale, notre salon est un sanctuaire dédié à l'art capillaire féminin.
            Mêlant techniques traditionnelles et innovations de pointe, nous offrons à chaque cliente
            un soin personnalisé dans un environnement exclusif et raffiné.
          </p>
          <div className="mt-12 flex justify-center items-center gap-12 grayscale opacity-30">
            <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-2xl">🏆</div>
            <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-2xl">✨</div>
            <div className="w-16 h-16 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-2xl">💎</div>
          </div>
        </div>
      </section>

      <Services />
      <Gallery />
      <Booking />

      {/* Loyalty Program Highlight */}
      <section className="bg-gradient-to-b from-[#0D0D0D] to-[#0A0A0A] py-24">
        <div className="section">
          <div className="glass p-12 rounded-3xl border-2 border-[#D4AF37]/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#D4AF37]/20 transition-all duration-700" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#D4AF37] font-bold uppercase tracking-widest text-sm mb-4 block">Le Cercle Privé</span>
                <h2 className="text-4xl mb-6">Rejoignez notre <span className="gradient-text">Programme de Fidélité</span></h2>
                <p className="text-gray-400 text-lg mb-8">
                  Parce que votre fidélité mérite d'être célébrée, nous avons créé un programme de récompenses exclusif.
                  Profitez de 10% de réduction dès votre 5ème visite et recevez des invitations prioritaires à nos événements privés.
                </p>
                <div className="flex gap-4">
                  <button className="btn-primary">Devenir membre</button>
                  <button className="btn-secondary">En savoir plus</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                  <div className="text-3xl mb-2">🎁</div>
                  <h4 className="font-bold text-[#D4AF37]">-10%</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">SUR TOUTES LES PRESTATIONS</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                  <div className="text-3xl mb-2">🥂</div>
                  <h4 className="font-bold text-[#D4AF37]">PRIORITY</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">VENTES PRIVÉES EXCLUSIVES</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                  <div className="text-3xl mb-2">💅</div>
                  <h4 className="font-bold text-[#D4AF37]">CARE</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">ÉCHANTILLONS OFFERTS</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5 text-center">
                  <div className="text-3xl mb-2">🎈</div>
                  <h4 className="font-bold text-[#D4AF37]">B-DAY</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-tighter">CADEAU D'ANNIVERSAIRE</p>
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
            <h2 className="text-3xl md:text-4xl mb-6">Flexibilité de <span className="gradient-text">Paiement</span></h2>
            <p className="text-gray-400 text-lg">
              Nous voulons que nos services d'exception soient accessibles à toutes. Nous proposons des solutions de paiement échelonné.
              "Achetez maintenant, payez plus tard" facilement grâce à nos partenaires de confiance.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center bg-white/5 p-8 rounded-2xl">
            {['Klarna', 'Afterpay', 'Affirm', 'Zip'].map((brand) => (
              <div key={brand} className="text-center group">
                <div className="w-24 h-12 bg-gray-800 rounded flex items-center justify-center text-gray-400 font-bold group-hover:bg-[#D4AF37] group-hover:text-black transition-all cursor-crosshair">
                  {brand}
                </div>
                <span className="text-[9px] text-gray-600 mt-2 block uppercase font-bold tracking-widest">Partenaire Officiel</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
