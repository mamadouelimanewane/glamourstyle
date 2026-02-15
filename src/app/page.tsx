import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Booking from '@/components/Booking';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-secondary">
      <Header />
      <Hero />
      <Booking />

      {/* Introduction Section - Artistic Cocoon */}
      <section id="experience" className="section py-52 text-center bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-5xl mx-auto px-10 relative z-10">
          <span className="text-primary text-xs uppercase tracking-[12px] font-bold mb-12 block">Héritage & Passion</span>
          <h2 className="text-5xl md:text-8xl mb-12 leading-[1] font-heading font-light text-secondary">
            Bienvenue dans <br />
            <span className="italic font-serif text-accent underline decoration-primary/20 decoration-8 underline-offset-8">L'Univers Ka</span>
          </h2>
          <p className="text-secondary/70 text-2xl font-light italic leading-relaxed max-w-4xl mx-auto mb-20">
            Situé au centre commercial du Sea Plaza sur la magnifique corniche de Dakar,
            Michèle KA n'est pas qu'un salon, c'est un sanctuaire où se mêlent Art de vivre,
            Design et Coiffure Haute Couture. Ici, chaque visite est un voyage, chaque boucle un poème.
          </p>

          <div className="flex justify-center flex-wrap items-center gap-20 opacity-40 hover:opacity-100 transition-opacity duration-1000">
            <div className="group flex flex-col items-center gap-4 cursor-crosshair">
              <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center text-4xl border border-secondary/5 shadow-xl group-hover:scale-110 group-hover:bg-primary transition-all">✨</div>
              <span className="text-[10px] uppercase tracking-[4px] font-bold">Luxe</span>
            </div>
            <div className="group flex flex-col items-center gap-4 cursor-crosshair">
              <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center text-4xl border border-secondary/5 shadow-xl group-hover:scale-110 group-hover:bg-accent transition-all">🎨</div>
              <span className="text-[10px] uppercase tracking-[4px] font-bold">Art</span>
            </div>
            <div className="group flex flex-col items-center gap-4 cursor-crosshair">
              <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center text-4xl border border-secondary/5 shadow-xl group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all">💖</div>
              <span className="text-[10px] uppercase tracking-[4px] font-bold">Passion</span>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Gallery />

      {/* Loyalty Program Highlight - Restyled for Michele Ka */}
      <section className="bg-background py-40 px-8 relative">
        <div className="section">
          <div className="bg-white p-12 md:p-24 rounded-[100px] border border-secondary/5 relative overflow-hidden group shadow-2xl">
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
              <div>
                <span className="text-primary font-bold uppercase tracking-[10px] text-xs mb-8 block font-body">Le Club Privé</span>
                <h2 className="text-5xl md:text-7xl mb-10 font-heading font-light text-secondary leading-tight">Rejoignez le <br /><span className="italic font-serif text-accent">Cercle Ka</span></h2>
                <p className="text-muted-foreground text-xl mb-12 font-light italic leading-relaxed">
                  L'exclusivité a un nom. En tant que membre privilégié, accédez à des expériences curatées,
                  des rituels avant-première et des attentions artistiques dédiées.
                </p>
                <div className="flex flex-col sm:flex-row gap-8">
                  <button className="px-16 py-6 bg-secondary text-white font-bold text-xs uppercase tracking-[5px] rounded-full hover:bg-primary transition-all shadow-2xl active:scale-95">Devenir Membre</button>
                  <button className="px-16 py-6 bg-transparent border border-secondary/10 text-secondary font-bold text-xs uppercase tracking-[5px] rounded-full hover:bg-background transition-all">Découvrir</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: '🎁', tag: '-15%', label: 'POUR VOUS' },
                  { icon: '🥂', tag: 'PRIORITÉ', label: 'ACCÈS' },
                  { icon: '🎭', tag: 'VERNISSAGE', label: 'INVITATIONS' },
                  { icon: '🌹', tag: 'CADEAU', label: 'ANNIVERSAIRE' }
                ].map((item, i) => (
                  <div key={i} className="bg-background/50 backdrop-blur-md p-10 rounded-[60px] border border-white/40 text-center shadow-xl hover:-translate-y-4 transition-all duration-500 group/item">
                    <div className="text-5xl mb-6 group-hover/item:scale-125 transition-transform">{item.icon}</div>
                    <h4 className="font-bold text-primary text-3xl mb-2">{item.tag}</h4>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[4px] font-bold">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* BNPL Section - Restyled for Michele Ka */}
      <section className="section py-52 border-t border-secondary/5 bg-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-24 px-8">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl mb-10 font-heading text-secondary leading-tight">La Beauté à <br /><span className="italic font-serif text-accent underline decoration-primary/20">Votre Rythme</span></h2>
            <p className="text-muted-foreground text-2xl leading-relaxed italic font-light">
              L'excellence ne devrait jamais attendre. Profitez de nos facilités de paiement
              pour vivre votre transformation sans compromis sur votre sérénité.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center bg-background p-16 rounded-[80px] border border-secondary/5 shadow-2xl">
            {['Klarna', 'Afterpay', 'Affirm', 'Zip'].map((brand) => (
              <div key={brand} className="text-center group">
                <div className="w-32 h-16 bg-white border border-secondary/5 rounded-3xl flex items-center justify-center text-secondary/40 font-bold group-hover:bg-secondary group-hover:text-white transition-all cursor-pointer shadow-md">
                  {brand}
                </div>
                <span className="text-[10px] text-primary mt-6 block uppercase font-bold tracking-[4px]">Partenaire</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
