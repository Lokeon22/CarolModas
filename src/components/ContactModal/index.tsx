import { Container, Content, IconsContainer } from "./style";

import phone from "../../assets/icons/phone.svg";
import email from "../../assets/icons/email.svg";
import time from "../../assets/icons/time.svg";

export const ContactModal = () => {
  return (
    <Container>
      <p>
        Para mais informações, ajuda ou sugestões entre em contato conosco pelo
        formulário abaixo. Nossos vendedores estão disponíveis 24 horas para te
        ajudar!
      </p>
      <Content>
        <div>
          <IconsContainer>
            <img src={phone} />
            <div>
              <h2>Telefone:</h2>
              <span>(32) 9 9999-9999</span>
            </div>
          </IconsContainer>

          <IconsContainer>
            <img src={email} />
            <div>
              <h2>Email:</h2>
              <span>carolmodas@gmail.com</span>
            </div>
          </IconsContainer>

          <IconsContainer>
            <img src={time} />
            <div>
              <h2>Atendimento:</h2>
              <span>Seg - Dom: 11h - 23h</span>
            </div>
          </IconsContainer>
        </div>

        <form action="#">
          <div>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Email" />
          </div>
          <input type="text" placeholder="Assunto" />
          <textarea name="" placeholder="Mensagem" />
          <button type="submit">Enviar</button>
        </form>
      </Content>
    </Container>
  );
};
