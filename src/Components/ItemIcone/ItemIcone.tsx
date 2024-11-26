import React from 'react';

interface ToolCardProps {
  name: string;
  logo: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, logo }) => {
  return (
    <div className="font-montserrat flex items-center">
      <img src={logo} alt={name} className="mr-2" />
      <p className="has-text-white">{name}</p>
    </div>
  );
};

export default ToolCard;
