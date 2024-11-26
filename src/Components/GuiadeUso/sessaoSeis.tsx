import React from 'react';
import Historico from '../imagens/dashboardTela.svg';

const SessaoSeis: React.FC = () => {
  return (
    <div className="font-montserrat flex flex-col items-center justify-center bg-black py-6">
      <div className="text-left">
        <img src={Historico} alt="Historico" className="w-full md:w-2/4 lg:w-full mx-auto mb-2" />
        <h1 className="text-2xl font-bold text-white">Histórico</h1>
        <p className="mt-2 text-gray-300">
          Em Histórico, você pode visualizar as ordens de manutenções.
        </p>
      </div>
    </div>
  );
};

export default SessaoSeis;
