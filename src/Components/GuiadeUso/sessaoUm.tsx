import React from 'react';
import SessaoIniciar from '../imagens/sessaoIniciar.svg';

const TelaInicial: React.FC = () => {
  return (
    <div className="font-montserrat flex flex-col items-center justify-center bg-black py-6">
      <div className="text-left">
        <img src={SessaoIniciar} alt="Sessao Iniciar" className="w-full lg:w-11/12 md:w-3/4 mx-auto mb-2" />
        <h1 className="text-2xl font-bold text-white">Tela Inicial</h1>
        <p className="mt-2 text-gray-300">
          Ao iniciar o <strong className="text-white">Holopart</strong>, essa será a
          tela inicial, com as opções de
          "Iniciar" e "Sair".
        </p>
      </div>
    </div>
  );
};

export default TelaInicial;
