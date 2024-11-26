import React from 'react';
import Home from '../imagens/homeHolopart.svg';

const SessaoDois: React.FC = () => {
  return (
    <div className="font-montserrat flex flex-col items-center justify-center bg-black py-6">
      <div className="text-right">
        <img src={Home} alt="Home" className="w-full md:w-3/4 lg:w-full mx-auto mb-2" />
        <h1 className="text-2xl font-bold text-white">Home</h1>
        <p className="mt-2 text-gray-300">
          Na Home, você encontra um catálogo de <strong className="text-white">moldes disponíveis</strong>, menu
          para ir até as abas de <strong className="text-white">Treinamento</strong> ou <strong className="text-white">Histórico</strong>.<br />
        </p>
      </div>
    </div>
  );
};

export default SessaoDois;
