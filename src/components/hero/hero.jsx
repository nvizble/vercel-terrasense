import "./hero.css";
import "../utils/buttons/buttonFilled";
import "../utils/buttons/buttonOutlined";
import { useSidebar } from "../../contexts/SidebarContext";

const Hero = () => {
  const { toggleSidebar, toggleSignUp } = useSidebar();

  return (
    <section
      className="container-fluid hero"
      id="inicio"
      style={{
        backgroundImage: "url(/images/background-images/background_hero.png)",
      }}
    >
      <div className="container container-hero">
        <img
          src="/images/terrasense/terrasense_logovertical_branca.svg"
          alt="Terra Sense AI Logo Vertical Branca"
          id="hero-logo"
        />
        <div className="container-hero">
          <h1>Plantando tecnologia, colhendo resultados</h1>
          <a className="link" href="https://www.youtube.com/watch?v=gwdACmOo3vI" target="_blank" rel="noreferrer">Link do Pitch Vídeo</a>
          <div className="buttons-hero">
            <buttonOutlined className="btn-outlined">Entrar em Contato</buttonOutlined>
            <buttonFilled className="btn-filled" onClick={() => {
              toggleSignUp();
              toggleSidebar();
            }}>Criar Conta</buttonFilled>
          </div>
          <img
            src="/images/terrasense/icon_scroll_down.svg"
            alt="Ícone Scroll Down"
          />
        </div>
      </div>
    </section>
    
  );
};

  export {Hero};