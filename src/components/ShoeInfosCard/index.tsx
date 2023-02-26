import { Container, ShoeImage, ShoeInfos } from "./style";

import shoepink from "../../assets/cartimg/shoepink.svg";
import zap from "../../assets/cartimg/zap.svg";

export const ShoeInfosCard = () => {
  return (
    <Container>
      <ShoeImage>
        <img src={shoepink} alt="shoepink" />
      </ShoeImage>
      <ShoeInfos>
        <h2>
          Sapato Scarpin Feminino <br />
          Salto Triângulo Rosé
        </h2>
        <h3>R$ 149,00</h3>
        <p>
          Tamanho: <span>35</span>
        </p>

        <a href="https://www.google.com" target="_blank">
          Entrar em contato
          <img src={zap} />
        </a>

        <span>
          Você merece um sapato que combine perfeitamente com sua personalidade
          marcante. Apresentamos o nosso sapato de salto triangular rosé!
        </span>
      </ShoeInfos>
    </Container>
  );
};
