import React, { useState } from 'react'; 

const Faq: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState(Array(5).fill(false));

  const toggleFaq = (index: number) => {
    setFaqOpen(prev => {
      const newFaqOpen = [...prev];
      newFaqOpen[index] = !newFaqOpen[index];
      return newFaqOpen;
    });
  };

  const faqData = [
    {
      question: "Qual a diferença entre Hololens e Holopart?",
      answer: "O Holopart é um software que combina hologramas e peças, desenvolvido como parte de um TCC, que utiliza a realidade aumentada para otimizar processos fabris,  em conjunto com dispositivos de AR, como o Hololens, que proporciona uma experiência interativa e imersiva na manutenção e treinamento."
    },
    {
      question: "Quem é o Boschinho?",
      answer: "O nosso mascote Boschinho é uma representação do Robert Bosch, a criação dele ocorreu em 2023 no concurso da semana da qualidade e a responsável pelas artes foi a Milena Sunara, também vencedora do concurso. Agora com a premissa do HOLOPART o Boschinho foi redesenhado e está em 3D"
    },
    {
      question: "Qual a diferença da realidade aumentada para a realidade virtual?",
      answer: "A realidade aumentada (RA) adiciona elementos virtuais ao mundo real, permitindo que os usuários interajam com ambos simultaneamente. Já a realidade virtual (RV) cria um ambiente completamente digital, imersivo e separado do mundo físico, onde os usuários podem explorar e interagir apenas com elementos virtuais."
    },
    {
      question: "Posso utilizar o Hololens com óculos?",
      answer: "Sim, o Hololens pode ser utilizado por pessoas que usam óculos. O dispositivo possui um ajuste de dioptria que permite que usuários com diferentes graus de visão possam utilizar o headset confortavelmente sem a necessidade de retirar os óculos."
    },
    {
      question: "O Holopart pode ser integrado com outros dispositivos inteligentes?",
      answer: "Sim, o Holopart pode ser integrado com outros dispositivos inteligentes, permitindo a criação de soluções interativas que conectam diversos sistemas e dispositivos para uma experiência mais rica e colaborativa."
    }
  ];
  

  return (
    <div className="font-montserrat mt-16 text-center">
      <h2 className="text-white text-4xl font-bold mt-5">FAQ</h2>

      <div className="mt-10 px-5">
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-600">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left py-2 text-white focus:outline-none"
              >
                <span>{item.question}</span>
                <span className="ml-2 text-2xl w-8 h-8 flex items-center justify-center rounded-full">
                  {faqOpen[index] ? '-' : '+'}
                </span>
              </button>
              {faqOpen[index] && (
                <div className="text-gray-400 pb-2 text-left">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
