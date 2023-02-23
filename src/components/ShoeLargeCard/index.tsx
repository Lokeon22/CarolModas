import { Container } from "./style";
import { ProdutosProps } from "../../hooks/useGetProducts";

type ShoeCardProps = {
  produto: ProdutosProps;
};

export const ShoeLargeCard = ({ produto }: ShoeCardProps) => {
  return (
    <Container>
      <img src={produto.photo} alt={produto.name} />
      <div>
        <h2>{produto.name}</h2>
        <p>R$ {produto.price}</p>
      </div>
    </Container>
  );
};
