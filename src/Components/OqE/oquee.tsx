import React from 'react';
import oqe from '../imagens/oqe.svg';

const Info: React.FC = () => {
  return (
    <section className="font-montserrat section bg-black">
      <div className="font-montserrat flex flex-col md:flex-row items-center justify-between">
        
        {/* Coluna da imagem à esquerda */}
        <div className="w-full md:w-1/2 flex justify-center">
          <figure className="image">
            <img 
              src={oqe} 
              alt="Placeholder" 
              className="w-3/4 max-w-md h-auto"
            />
          </figure>
        </div>

        {/* Coluna do texto à direita */}
        <div className="w-full md:w-1/2 text-left flex flex-col justify-center mt-10 md:mt-0">
          <h2 className="title is-3 has-text-white">
            O que é?
          </h2>
          <p className="has-text-white">
            O HOLOPART é um desenvolvimento voltado para a otimização de processos na área fabril, com ênfase
             na manutenção industrial. Utilizando tecnologias de realidade aumentada, o HOLOPART auxilia técnicos 
            de manutenção a realizar tarefas de forma mais eficiente e eficaz.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
