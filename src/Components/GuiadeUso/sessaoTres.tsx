import React from 'react';
import Componentes from '../imagens/componentsTela.svg';

const SessaoTres: React.FC = () => {
  return (
    <div className="font-montserrat flex flex-col items-center justify-center bg-black py-6">
      <div className="text-left">
        <img 
          src={Componentes} 
          alt="Componentes" 
          className="w-full md:w-1/2 lg:w-1/3 mx-auto mb-2 max-h-809 object-contain" 
        />
        <h1 className="text-2xl font-bold text-white">Componentes</h1>
        <p className="mt-2 text-gray-300">
          Ao clicar em um dos moldes, você além de <strong className="text-white">visualizar em 3D</strong> o molde
          terá um <strong className="text-white">catálogo de componentes</strong> que estão presentes naquele molde.<br />
        </p>
      </div>
    </div>
  );
};

export default SessaoTres;
