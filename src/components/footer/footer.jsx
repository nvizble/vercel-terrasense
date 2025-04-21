import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => (
  <Container fluid className="footer">
    <Container>
      <div className="footer-content">
        <Col className="text-center img-footer-container">
          <img
            src="./images/terrasense/terrasense_logovertical_branca.svg"
            className="img-footer"
            alt="TerraSenseAI Logo Vertical"
          />
        </Col>
        <div className="container-footer-menu">
          <div className="footer-title-menu">
            <h3>Menu</h3>
          </div>
          <div className="footer-navmenu">
            <ul className="footer-menu">
              <li>
                <a href="#inicio" className="link">
                  Início
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="link">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#agro-ai" className="link">
                  Agro AI
                </a>
              </li>
            </ul>
            <ul className="footer-menu">
              <li>
                <a href="#noticias" className="link">
                  Notícias
                </a>
              </li>
              {/* <li><a href="#mercado" className="link-menu">Mercado</a></li> */}
              <li>
                <a href="#faq" className="link">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="#contato" className="link">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-address">
          <div className="footer-title-address">
            <h3>Endereço</h3>
          </div>
          <a
            href="https://maps.app.goo.gl/vRbdS1RhCzukrrAn7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP,
            01311-000
          </a>
        </div>
        <div className="conteiner-social">
          <div className="footer-title-social">
            <h3>Redes Sociais</h3>
          </div>
          <div className="social-content">
            <a
              href="https://linkedin.com/company/terrasenseai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/social-icons/linkedin-icon.svg"
                alt="LinkedIn Ícone"
              />
            </a>
            <a
              href="https://instagram.com/terrasenseai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/social-icons/instagram-icon.svg"
                alt="Instagram Ícone"
              />
            </a>
            <a
              href="https://facebook.com/terrasenseai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./images/social-icons/facebook-icon.svg"
                alt="Facebook Ícone"
              />
            </a>
          </div>
        </div>
        <div className="container-policy">
          <div className="footer-title-policy">
            <h3>Termos de Uso & Políticas de Privacidade</h3>
          </div>
          <div className="policy-links">
            <a href="#terms-conditions">Termos de Uso</a>
            <a href="#privacy-policy">Políticas de Privacidade</a>
          </div>
        </div>
      </div>
    </Container>
    <div className="developed">
      <h3>Desenvolvido com ❤ por TerraSenseAI</h3>
      <p>© Todos os direitos reservados</p>
      <h3>Projeto PBL - Engenharia de Software - FIAP ON</h3>
      <p>
        Guilherme Alves Rodrigues Ferreira
        <br />
        Hiago Granelli Ribeiro
        <br />
        João Pedro Brehula Souza
        <br />
        Joao Pedro Diniz Fernandes de Oliveira
        <br />
        Mariana Secchi Sanches
        <br />
      </p>
    </div>
  </Container>
);

export { Footer };
