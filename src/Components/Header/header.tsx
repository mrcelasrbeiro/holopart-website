import React, { useRef, useEffect } from 'react'; 
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface HeaderComponentProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="bg-black flex flex-col">
      <style>
        {`
          @font-face {
            font-family: 'Stretch Pro';
            src: url('./font/stretchpro-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
          .stretch-font {
            font-family: 'Stretch Pro', sans-serif;
          }
          .hover-white:hover {
            color: white; /* Deixa o texto branco ao passar o mouse */
          }
        `}
      </style>

      <header className="absolute top-0 left-0 w-full flex items-center justify-between bg-black py-4 z-50">
        <button 
          className="absolute left-4 text-white text-2xl" 
          onClick={toggleMenu} 
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <Link to="/" className="text-white stretch-font mx-auto text-center hover-white text-lg md:text-2xl">
          HOLOPART
        </Link>
      </header>

      {isMenuOpen && (
        <nav ref={menuRef} className="fixed left-0 top-0 h-full w-48 bg-black text-white p-4 z-50 backdrop-blur-md">
          <button 
            className="absolute top-4 right-4 text-white text-2xl" 
            onClick={() => setIsMenuOpen(false)} 
            aria-label="Fechar menu"
          >
            <FaTimes />
          </button>
          <div className="flex space-x-2 mb-4">
            <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#CF317F' }}></div>
            <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#00B3DB' }}></div>
            <div className="w-5 h-5 rounded-full" style={{ backgroundColor: '#393939' }}></div>
          </div>
          <ul className="font-montserrat space-y-2">
            {["Conheça o projeto", "Conheça o time", "Guia de uso", "Ferramentas", ""].map((item) => (
              <li key={item} className="border-b border-gray-600 last:border-0">
                <Link 
                  to={`/${item.replace(/\s+/g, '').toLowerCase()}`} 
                  className="block p-2 text-white transition-transform duration-200 transform hover:scale-105 hover:text-[#fff]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HeaderComponent;
