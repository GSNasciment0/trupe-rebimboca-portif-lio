import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, Instagram, 
  ArrowRight, Tent, Smile, Star, Heart, Theater
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "5585992280986";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de saber mais sobre a Trupe Rebimboca.`;

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Mapeamento de imagens reais do acervo do Google Drive
  const images = {
    hero: "https://drive.google.com/uc?export=view&id=1_HDJ6SUnByYjZ3QznwFbs24UMl3888Td",
    sobre: "https://drive.google.com/uc?export=view&id=11cRvZXCGkRigjXalw9Xstg3krFiVWyYq",
    espetaculo1: "https://drive.google.com/uc?export=view&id=1QOXAW-Sf7-iGlCn5MaeU_BYH9ZtjySKY",
    espetaculo2: "https://drive.google.com/uc?export=view&id=1_XhZ4_qc4KNhcmj-78yRjDvGF3i-AOxQ",
    espetaculo3: "https://drive.google.com/uc?export=view&id=1WB4SkiIqN_Kt4C4Nqh7BVsESOe2gyqmZ",
    quintal1: "https://drive.google.com/uc?export=view&id=1mG_AjbeP2H17xzCkHz-1Cxsi7g0xMUQ4",
    quintal2: "https://drive.google.com/uc?export=view&id=1adLyyd-mYwGKfb8jOgfxDWQ3TqGhcEdQ",
    quintal3: "https://drive.google.com/uc?export=view&id=1KLdAqBukwB9KDwCBIA3RQuqr5yVUFrlw",
    quintal4: "https://drive.google.com/uc?export=view&id=1SIfL2-Rzm_rgmKvMnXRZzu4eErsIrhfN"
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-800">
      
      {/* Barra de Navegação */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <Tent className={`w-8 h-8 ${isScrolled ? 'text-red-600' : 'text-red-500'}`} />
            <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'}`}>
              TRUPE REBIMBOCA
            </span>
          </div>

          <div className={`hidden md:flex gap-8 font-semibold ${isScrolled ? 'text-gray-600' : 'text-white'}`}>
            <button onClick={() => scrollTo('sobre')} className="hover:text-red-500 transition-colors">Sobre</button>
            <button onClick={() => scrollTo('espetaculos')} className="hover:text-red-500 transition-colors">Espetáculos</button>
            <button onClick={() => scrollTo('quintal')} className="hover:text-red-500 transition-colors">Quintal Cultural</button>
            <button onClick={() => scrollTo('contato')} className="hover:text-red-500 transition-colors">Contacto</button>
          </div>

          <button className="md:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center gap-4 font-semibold text-gray-700">
            <button onClick={() => scrollTo('sobre')} className="w-full py-2 hover:bg-gray-50">Sobre</button>
            <button onClick={() => scrollTo('espetaculos')} className="w-full py-2 hover:bg-gray-50">Espetáculos</button>
            <button onClick={() => scrollTo('quintal')} className="w-full py-2 hover:bg-gray-50">Quintal Cultural</button>
            <button onClick={() => scrollTo('contato')} className="w-full py-2 hover:bg-gray-50">Contacto</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 z-0 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: `url(${images.hero})` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-red-500/50 bg-red-500/20 text-red-300 font-semibold text-sm backdrop-blur-sm">
            Desde 2010 • Fortaleza, CE
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            A arte do encontro, <br/><span className="text-red-500">do riso</span> e da cultura popular.
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light">
            Pesquisando o teatro de rua e a magia do circo na figura do palhaço popular brasileiro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              Chama nóissssss! <Smile className="w-5 h-5" />
            </a>
            <button 
              onClick={() => scrollTo('espetaculos')}
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/20"
            >
              Ver Espetáculos
            </button>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group">
                <img 
                  src={images.sobre} 
                  alt="Apresentação da Trupe Rebimboca" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-bold text-xl">Arte que transforma comunidades</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 text-red-600 font-bold mb-4 uppercase tracking-wider">
                <Theater className="w-5 h-5" /> Quem Somos
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Nascidos no Grande Bom Jardim
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  A <strong>Trupe Rebimboca</strong> investiga o teatro de rua e o circo, focando-se na figura do palhaço popular. Sediados no bairro Siqueira, em Fortaleza, actuamos desde 2010 democratizando o acesso à arte.
                </p>
                <div className="p-6 bg-red-50 rounded-2xl border-l-4 border-red-500">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" /> Legado do Mestre Pimenta
                  </h3>
                  <p className="text-base text-gray-700">
                    A nossa pesquisa tem como base o acervo do <strong>Mestre Pimenta</strong>, guardião de comédias e melodramas que datam de 1930 a 1960. Registamos e estudamos este património vivo da palhaçaria cearense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frase do Mestre */}
      <section className="py-16 bg-red-600 text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black italic mb-6">
            "O circo é uma porta aberta para a imaginação e o riso. Quando o público rir é quando o palhaço se sente mais feliz."
          </h2>
          <p className="text-xl font-bold uppercase tracking-widest text-red-200">— Palhaço Pimenta</p>
        </div>
      </section>

      {/* Repertório */}
      <section id="espetaculos" className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Os Nossos Espetáculos</h2>
            <p className="text-xl text-gray-600">Leve a alegria para a sua praça, escola ou festival.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg group">
              <div className="h-64 overflow-hidden">
                <img src={images.espetaculo1} alt="Fuxica e Tetel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-3">Fuxica e Tetel</h3>
                <p className="text-gray-600">Saudando o riso alheio com palhaçaria clássica, mágicas e malabarismo.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg group">
              <div className="h-64 overflow-hidden">
                <img src={images.espetaculo2} alt="Palhaçarria" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-3">Palhaçarria</h3>
                <p className="text-gray-600">Um espetáculo interactivo onde o respeitável público é o protagonista.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg group">
              <div className="h-64 overflow-hidden">
                <img src={images.espetaculo3} alt="Maré de Alegria" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-3">Maré de Alegria</h3>
                <p className="text-gray-600">Intervenções com pernas de pau e bambolês que encantam miúdos e graúdos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quintal Cultural */}
      <section id="quintal" className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Quintal Cultural Dona Francisca</h2>
            <p className="text-xl text-gray-300 mb-8 font-light leading-relaxed">
              O nosso projecto de ocupação comunitária no bairro Siqueira. Promovemos acções artísticas gratuitas para democratizar a cultura na periferia.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img src={images.quintal1} alt="Momento do Quintal" className="rounded-xl w-full h-40 object-cover" />
              <img src={images.quintal2} alt="Público" className="rounded-xl w-full h-40 object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <img src={images.quintal3} alt="Apresentação comunitária" className="rounded-3xl w-full h-64 object-cover" />
            <img src={images.quintal4} alt="Impacto social" className="rounded-3xl w-full h-64 object-cover" />
          </div>
        </div>
      </section>

      {/* Rodapé e Contacto */}
      <footer id="contato" className="bg-white pt-24 pb-12 border-t">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto bg-red-600 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <h2 className="text-4xl font-black mb-4 relative z-10">Chama nóissssss!!!! :o)</h2>
            <p className="text-xl mb-8 relative z-10">Contrate a Trupe para festivais, festas ou projectos educativos.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> WhatsApp
              </a>
              <a href="mailto:truperebimboca@gmail.com" className="bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-800 transition-colors flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" /> E-mail
              </a>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <Tent className="text-red-600 w-6 h-6" />
              <span className="font-black text-xl text-gray-900 tracking-tighter">TRUPE REBIMBOCA</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/trupe_rebimboca" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors flex items-center gap-2">
                <Instagram className="w-5 h-5" /> Instagram
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Siqueira, Fortaleza-CE
              </div>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Trupe Rebimboca</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function QuoteIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}