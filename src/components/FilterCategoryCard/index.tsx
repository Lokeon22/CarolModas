import { Container } from "./style";
import { ProdutosProps } from "../../hooks/useGetProducts";

type CategoryCardProps = {
  produto: ProdutosProps;
};

export const FilterCategoryCard = ({ produto }: CategoryCardProps) => {
  //H2 style, ajuste apenas para adequar tamanho da imagem de teste

  return (
    <Container>
      <img src={produto.photo} alt={produto.name} />
      <h2
        style={{
          position: produto.name === "Sapatilhas" ? "relative" : "static",
          top: produto.name === "Sapatilhas" ? "19px" : "0px",
          fontSize: produto.name.length >= 13 ? "19px" : "23px",
          textTransform: produto.name.length >= 13 ? "none" : "uppercase",
          fontWeight: produto.name.length >= 13 ? "500" : "400",
        }}
      >
        {produto.name}
      </h2>
    </Container>
  );
};
