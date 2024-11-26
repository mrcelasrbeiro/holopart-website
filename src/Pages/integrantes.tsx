import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import bannerTime from '../Components/imagens/bannerTime.svg';
import bannerTimeMobile from '../Components/imagens/bannerTime2.svg';
import Footer from '../Components/Footer/footer';
import HeaderComponent from '../Components/Header/header';
import bannerle from '../Components/imagens/leticiaCardoso.svg';
import bannermillena from '../Components/imagens/millenaSunara.svg';
import bannermirela from '../Components/imagens/mirelaMoraes.svg';
import bannervictoria from '../Components/imagens/victoriaMacri.svg'
import banneryasmin from '../Components/imagens/yasminSantos.svg';
import bannermarcela from '../Components/imagens/marcelaRibeiro.svg';
import bannerafonso from '../Components/imagens/afonsoAlves.svg';


function Time() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const teamMembers = [
    {
      name: "Millena Sunara",
      funcao: "Dev FullStack - UI/UX",
      image: bannermillena,
      linkedin: "https://www.linkedin.com/in/millena-sunara-548334261/",
      github: "https://github.com/millenasunara"
    },
    {
      name: "Mirela Moraes",
      funcao: "Dev BackEnd - IA",
      image: bannermirela,
      linkedin: "https://www.linkedin.com/in/mirela-moraes-5b0622246/",
      github: "https://github.com/mirelamoraess"
    },
    {
      name: "Victoria Macri",
      funcao: "Dev FrontEnd - Comunicação",
      image: bannervictoria,
      linkedin: "https://www.linkedin.com/in/victoria-macri-8ab726253/",
      github: "https://github.com/MacriiVic"
    },
    {
      name: "Yasmin Santos",
      funcao: "Dev BackEnd - IA - Ger. Nuvem",
      image: banneryasmin,
      linkedin: "https://www.linkedin.com/in/yasmin-santos-042678254/",
      github: "https://github.com/YasKarla"
    },
    {
      name: "Marcela Ribeiro",
      funcao: "Dev BackEnd - Automatização",
      image: bannermarcela,
      linkedin: "https://www.linkedin.com/in/marcela-s-ribeiro-357722284/",
      github: "https://github.com/mrcelasrbeiro"
    },
    {
      name: "Afonso Alves",
      funcao: "Dev BackEnd - Nuvem - Autom.",
      image: bannerafonso,
      linkedin: "https://www.linkedin.com/in/afonso-alves-0576a42b2/",
      github: "https://github.com/afonsoAlves33"
    },
    {
      name: "Letícia Cardoso",
      funcao: "Dev FrontEnd - Guia Usuário",
      image: bannerle,
      linkedin: "https://www.linkedin.com/in/leticia-cardoso1/",
      github: "https://github.com/LeticiaCardoso1"
    },
  ];

  return (
    <div className="font-montserrat min-h-screen has-background-black relative">
      <HeaderComponent isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className={`flex-1 transition-margin duration-300 ${isMenuOpen ? 'overflow-hidden' : ''}`}>
        <div className="flex items-center justify-center h-auto">
          <img className="mt-20" src={isMobile ? bannerTimeMobile : bannerTime} alt="Banner do Time" />
        </div>
        <section className="text-white px-5 mt-6"> 
          <h2 className="title is-1 has-text-centered mb-5 is-size-4-mobile" style={{ color: 'white' }}>
            Integrantes
          </h2>
          <div className="columns is-multiline is-centered">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div key={index} className="column is-6 is-small-tablet is-2-desktop px-2 mb-2"> {/* Reduzido mb */}
                <div className="box" style={{ backgroundColor: 'rgba(113, 110, 110, 0.5)', padding: '15px', marginBottom: '10px', borderRadius: '0' }}> {/* Ajustado padding e margin */}
                  <img src={member.image} alt={member.name} className="image mb-1" style={{ borderRadius: '0' }} />
                  <h3 className="title is-5 mb-1" style={{ color: 'white', fontWeight: 'bold' }}>{member.name}</h3>
                  <p className="subtitle is-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{member.funcao}</p>
                  <div className="mt-2 flex items-center"> 
                    {member.linkedin && (
                      <a href={member.linkedin} className="has-text-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20} style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} className="has-text-link ml-2" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="columns is-multiline is-centered">
            {teamMembers.slice(4).map((member, index) => (
              <div key={index} className="column is-6 is-small-tablet is-2-desktop px-2 mb-2"> {/* Reduzido mb */}
                <div className="box" style={{ backgroundColor: 'rgba(113, 110, 110, 0.5)', padding: '15px', marginBottom: '10px', borderRadius: '0' }}> {/* Ajustado padding e margin */}
                  <img src={member.image} alt={member.name} className="image mb-1" style={{ borderRadius: '0' }} />
                  <h3 className="title is-5 mb-1" style={{ color: 'white', fontWeight: 'bold' }}>{member.name}</h3>
                  <p className="subtitle is-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{member.funcao}</p>
                  <div className="mt-2 flex items-center"> {/* Reduzido mt */}
                    {member.linkedin && (
                      <a href={member.linkedin} className="has-text-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20} style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} className="has-text-link ml-2" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={20} style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Time;
