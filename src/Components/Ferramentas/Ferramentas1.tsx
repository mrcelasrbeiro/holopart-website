import React from 'react';
import FerramentasGrid from '../FerramentasGrid/ferramentasGrid';

const FerramentasComponent: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="text-white container mx-auto ">
        <h1 className=" text-white">Ferramentas</h1>
        <p className="has-text-grey-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <FerramentasGrid />
      </div>
    </div>
  );
};
export default FerramentasComponent;
