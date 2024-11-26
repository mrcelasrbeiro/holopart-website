import React, { useState, useEffect } from 'react';
import ToolCard from '../ItemIcone/ItemIcone'; 
import unityLogo from '../imagens/Unity.svg';
import visualStudioLogo from '../imagens/Visual Studio.svg';
import vscodeLogo from '../imagens/Visual Code.svg';
import azureLogo from '../imagens/Azure.svg';
import blenderLogo from '../imagens/Blender.svg';
import figmaLogo from '../imagens/Figma.svg';
import anacondaLogo from '../imagens/Anaconda.svg';
import dockerLogo from '../imagens/Docker.svg';
import powershellLogo from '../imagens/PowerShell.svg';
import sqlServerLogo from '../imagens/SQL Server.svg';
import docusaurusLogo from '../imagens/Docusaurus.svg';
import fastApiLogo from '../imagens/fastapi.svg';
import viteLogo from '../imagens/vite.svg';
import typescriptLogo from '../imagens/typescript.svg';
import tailwindLogo from '../imagens/tailwind.svg';
import seleniumLogo from '../imagens/selenium.svg';
import bulmaLogo from '../imagens/bulma.svg';

const tools = [
  { name: '', logo: unityLogo },
  { name: '', logo: visualStudioLogo },
  { name: '', logo: vscodeLogo },
  { name: '', logo: azureLogo },
  { name: '', logo: blenderLogo },
  { name: '', logo: figmaLogo },
  { name: '', logo: anacondaLogo },
  { name: '', logo: dockerLogo },
  { name: '', logo: powershellLogo },
  { name: '', logo: sqlServerLogo },
  { name: '', logo: docusaurusLogo },
  { name: '', logo: fastApiLogo },
  { name: '', logo: viteLogo },
  { name: '', logo: typescriptLogo },
  { name: '', logo: tailwindLogo },
  { name: '', logo: seleniumLogo },
  { name: '', logo: bulmaLogo },
];

const FerramentasGrid: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={`mt-${isMobile ? '0' : '6'}`}>
      <div className="grid grid-cols-5 gap-9">
        {tools.map((tool, index) => (
          <div key={index} className="mt-5 flex flex-col items-center">
            <img src={tool.logo} alt={tool.name} className="w-569 h-569" /> 
            <p className="text-white mt-2 text-center text-sm">{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FerramentasGrid;
