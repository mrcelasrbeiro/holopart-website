import React, { useState } from 'react';
import TelaInicial from '../Components/GuiadeUso/sessaoUm';
import HomeSection from '../Components/GuiadeUso/sessaoDois';
import HeaderComponent from '../Components/Header/header';
import SessaoTres from '../Components/GuiadeUso/sessaoTres';
import SessaoQuatro from '../Components/GuiadeUso/sessaoQuatro';
import SessaoSeis from '../Components/GuiadeUso/sessaoSeis';
import Footer from '../Components/Footer/footer';

const GuiaDeUso: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <div className="bg-black text-white min-h-screen font-montserrat">
      <HeaderComponent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="transition-all duration-200 flex-grow">
        <div className="text-center px-7 py-24">
          <h1 className="text-white font-bold">Guia de Uso</h1>
          <p className="mt-5 text-white opacity-80">Você já sabe como funciona?</p>
          <TelaInicial />
          <HomeSection />
          <SessaoTres />
          <SessaoQuatro />
          <SessaoSeis />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GuiaDeUso;
