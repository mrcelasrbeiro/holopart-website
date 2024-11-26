import React from 'react';
import { Link } from 'react-router-dom'; 
import treinamento from '../imagens/tmh.svg';

const Funcionalidade: React.FC = () => {
  return (
    <section className="font-montserrat section bg-black">
      <div className="columns is-vcentered is-centered" style={{ marginBottom: '4rem' }}>
        <div className="column is-full-mobile is-one-third-desktop has-text-centered">
          <img 
            src={treinamento} 
            alt="Treinamento" 
            className="mx-auto" 
            style={{ width: '90%', height: 'auto', margin: '0 10px 20px' }} 
          />
        </div>
        <div className="column is-full-mobile is-one-third-desktop has-text-white">
          <h2 className="title is-4 has-text-white">Funcionalidades</h2> {/* Adicionado has-text-white aqui */}
          <p>
            Poderá encontrar um sistema de histórico com manutenções, realizar treinamentos guiados por um vídeo e visualizar injetoras em um modelo 3D com cada componente.
          </p>
          <br />
          <Link 
            to="/guiadeuso" 
            className="relative bg-black border border-gray-600 rounded-full px-28 py-2 text-white text-center mt-4 transform hover:scale-105 hover:text-[#fff]"
            style={{ whiteSpace: 'nowrap' }} 
          >
            <span>Guia de uso</span>
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full"
              style={{ backgroundColor: 'rgba(113, 110, 110, 0.5)' }} 
            ></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Funcionalidade;
