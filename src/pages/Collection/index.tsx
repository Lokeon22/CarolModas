import { useGetProducts } from "../../hooks/useGetProducts";
import {
  TitlesCollection,
  SummerContainer,
  ShoeCollectionContainer,
} from "./style";

import { Container } from "../Home/style";
import { Header } from "../../components/Header";
import { Content } from "../Home/style";
import { ShoeLargeCard } from "../../components/ShoeLargeCard";

import veraobg from "../../assets/collectionimg/veraobg.svg";

export const Collection = () => {
  const { produtos } = useGetProducts();

  return (
    <Container>
      <Header />
      <Content>
        <TitlesCollection>
          <h2>
            Todas as <span>Coleções</span>
          </h2>
          <h3>
            Coleção <span>Verão 2023</span>
          </h3>
        </TitlesCollection>
      </Content>

      <SummerContainer>
        <img src={veraobg} />

        <Content>
          <ShoeCollectionContainer>
            {produtos.length > 0 ? (
              produtos.map((produto) => (
                <ShoeLargeCard key={produto.id} produto={produto} />
              ))
            ) : (
              <h2>Carregando...</h2>
            )}
          </ShoeCollectionContainer>
        </Content>
      </SummerContainer>
    </Container>
  );
};
