import logoBosch from '../imagens/logoBosch.svg';
import barraFooter from '../imagens/barraFooter.svg'

function Footer() {
  return (
    <div className="flex flex-col">
      <footer className="flex justify-between items-center bg-black text-white mt-5">
        <div className="flex-grow"></div>
        <img className="w-32" src={logoBosch} alt="Logo Bosch" />
      </footer>
      <footer className="flex justify-between items-center bg-black text-white mt-auto w-full">
        <img className="h-2" src={barraFooter} alt="Barra de Footer" />
      </footer>
    </div>
  );
}

export default Footer;
