import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sessaoPrincipalImg from '../Components/imagens/sessaoPrincipal.svg';
import inovacao4Img from '../Components/imagens/inovacao4.svg'; 
import HololensImg from '../Components/imagens/HololensImg.svg'; 
import Footer from '../Components/Footer/footer';
import HeaderComponent from '../Components/Header/header';
import Faq from '../Components/Faq/faq';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col font-montserrat relative">
      <HeaderComponent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className={`bg-black transition-all duration-200 ${isMenuOpen ? 'overflow-hidden' : ''} flex-grow`}>
        <div className="section has-text-centered">
        <a href="https://holopartdocs.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img 
            className="mt-5 w-full h-auto" 
            src={isMobile ? inovacao4Img : sessaoPrincipalImg} 
            alt="Sessão Principal" 
          />
        </a>
        </div>
        <div className="container mx-auto px-4">
          <div className={`flex flex-col md:flex-row md:gap-20 mt-p11 items-center`}>
            <div className="flex flex-col items-center text-center">
              <h1 className="text-white text-3xl md:text-4xl font-bold mt-0">Hololens</h1>
              <img 
                src={HololensImg} 
                alt="Imagem do Hololens" 
                className={`mx-auto w-${isMobile ? '3/4' : 'full'} h-auto`} 
              />
            </div>

            <div className="flex flex-col items-center text-center mt-5">
              <h1 className="text-white text-3xl md:text-4xl font-bold">Indústria 4.0</h1>
              <p className="text-white mt-6"> 
                Integração da tecnologia de Realidade Aumentada, auxiliando os manutentores na visualização e orientação de moldes de injetoras.
              </p>
              <div className="flex flex-col items-center space-y-8 mt-6">
                <Link to="/conheçaoprojeto" className="relative bg-black border border-gray-600 rounded-full px-16 py-2 text-white text-center text-sm md:text-base transform hover:scale-105 hover:text-[#fff]">
                  <span>Conheça mais</span>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full bg-pink-500"></div>
                </Link>
                <Link to="/conheçaotime" className="relative bg-black border border-gray-600 rounded-full px-16 py-2 text-white text-center text-sm md:text-base transform hover:scale-105 hover:text-[#fff]">
                  <span>Conheça o time</span>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full" style={{ backgroundColor: '#00B3DB' }}></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <Faq />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
