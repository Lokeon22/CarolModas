import { Container, Logo, Pagamentos, Midias, Suporte } from "./style";

import logo from "../../assets/logo.svg";
import instagram from "../../assets/icons/socials/instagram.svg";
import facebook from "../../assets/icons/socials/facebook.svg";
import tiktok from "../../assets/icons/socials/tiktok.svg";

export const Footer = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} />
        <p>
          Caros amigos, a determinação clara de objetivos garante a contribuição
          de um grupo importante na determinação de todos os recursos funcionais
          envolvidos.{" "}
        </p>
      </Logo>

      <Pagamentos>
        <h2>Pagamentos</h2>
        <ul>
          <li>PIX</li>
          <li>Cartão de Crédito</li>
          <li>Cartão de Debito</li>
          <li>Dinheiro</li>
        </ul>
      </Pagamentos>

      <Midias>
        <h2>Mídias Sociais</h2>
        <div>
          <a href="#" target="_blank">
            <img src={instagram} />
          </a>
          <a href="#" target="_blank">
            <img src={facebook} />
          </a>
          <a href="#" target="_blank">
            <img src={tiktok} />
          </a>
        </div>
      </Midias>

      <Suporte>
        <h2>Ajuda e Suporte</h2>
        <div>
          <p>Politica e Privacidade</p>
          <p>Politica de Trocas</p>
        </div>
      </Suporte>
    </Container>
  );
};
