import React, { useState } from 'react';
import FerramentasGrid from '../Components/FerramentasGrid/ferramentasGrid';
import HeaderComponent from '../Components/Header/header';
import Footer from '../Components/Footer/footer';

const FerramentasPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <div className="bg-black min-h-screen flex flex-col font-montserrat">
      <HeaderComponent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="transition-all duration-200 flex-grow">
        <div className="container mx-auto flex-grow text-white flex flex-col md:flex-row mt-10 space-y-6 md:space-y-0 md:space-x-8 px-4 sm:px-6 lg:px-8">
          <div className="mt-16 md:w-1/2">
            <h1 className="mt-8 text-3xl sm:text-4xl font-bold">Ferramentas</h1>
            <p className="mt-4 sm:mt-4 text-sm sm:text-base">
              Desenvolvemos o Holopart com uma combinação de tecnologias avançadas que garantem uma experiência inovadora e imersiva.
            </p>
          </div>
          <div className="md:w-1/2">
            <FerramentasGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FerramentasPage;
