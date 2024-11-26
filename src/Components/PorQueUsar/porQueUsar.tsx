import React from 'react';
import pqu from '../imagens/pqusar.svg';
import reducaoDeslocamento from '../imagens/40.svg';
import aumentoeficiencia from '../imagens/90.svg';
import seta from '../imagens/seta.svg';

const PorQueUsar: React.FC = () => {
  return (
    <section className="font-montserrat section bg-black min-h-[50vh]">
      <div className="flex flex-col md:flex-row items-center mb-8 justify-center">
        <div className="flex items-center w-full md:w-auto text-white text-left mr-3">
          <h2 className="text-3xl md:text-4xl">Por que usar <br /><strong className="text-white">HOLOPART</strong></h2>
          <img src={seta} alt="Seta" className="max-w-full h-auto w-1/4 md:w-1/3 lg:w-1/4 ml-2" /> {/* Aumenta a seta em telas maiores */}
        </div>
        <div className="w-full md:w-auto text-white text-left text-2xl mt-8 md:mt-0">
          <p className="mb-4">
            Transforme tarefas complexas em uma imersão tecnologia através de uma solução inovadora.
          </p>
        </div>
      </div>

      {/* Imagens Responsivas */}
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/3 p-2 flex justify-center items-center">
          <img src={pqu} alt="Placeholder" className="max-w-[55%] h-auto" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-2 flex justify-center items-center">
          <img src={reducaoDeslocamento} alt="Placeholder" className="max-w-[55%] h-auto mt-16" />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 p-2 flex justify-center items-center">
          <img src={aumentoeficiencia} alt="Placeholder" className="max-w-[55%] h-auto mt-16" />
        </div>
      </div>

      <h1 className="mt-20 text-2xl text-white text-center">Garantindo manutenções mais rápidas e precisas.</h1>
    </section>
  );
};

export default PorQueUsar;
