import { Container } from "./style";

import shoeBlack from "../../assets/shoeBlack.svg";

export const ShoeLargeCard = () => {
  return (
    <Container>
      <img src={shoeBlack} />
      <div>
        <h2>Scarpin Preto</h2>
        <p>R$ 560,00</p>
      </div>
    </Container>
  );
};
