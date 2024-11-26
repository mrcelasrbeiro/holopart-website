import React, { useState, useEffect } from 'react';
import Info from '../Components/OqE/oquee';
import Industria from '../Components/Transfomacao/sessaoTransform';
import Funcionalidade from '../Components/Funcionalidades/funcionalidade';
import HeaderComponent from '../Components/Header/header';
import PorQueUsar from '../Components/PorQueUsar/porQueUsar';
import Footer from '../Components/Footer/footer';

const ConhecaProjeto: React.FC = () => {
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
    <div className="font-montserrat bg-black min-h-screen">
      <HeaderComponent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="transition-all duration-200 flex-grow">
        <Info />
        <Industria />
        <PorQueUsar />
        <Funcionalidade />
      </main>
      
      <Footer /> 
    </div>
  );
};

export default ConhecaProjeto;
