import React from 'react';
import Treinamento from '../imagens/treinamentoTela.svg';

const SessaoQuatro: React.FC = () => {
  return (
    <div className="font-montserrat flex flex-col items-center justify-center bg-black py-6">
      <div className="text-right">
        <img src={Treinamento} alt="Treinamento" className="w-full md:w-3/4 lg:w-full mx-auto mb-2" />
        <h1 className="text-2xl font-bold text-white">Treinamento</h1>
        <p className="mt-2 text-gray-300">
          Já na opção <strong className="text-white">Treinamento</strong>, possui <strong className="text-white">vídeos</strong> com função de auxiliar o
          manutentor.
        </p>
      </div>
    </div>
  );
};

export default SessaoQuatro;
