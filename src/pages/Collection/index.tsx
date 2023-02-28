import { useGetProducts } from "../../hooks/useGetProducts";
import {
  TitlesCollection,
  SeasonContainer,
  TitleSeason,
  ShoeCollectionContainer,
} from "./style";

import { Container } from "../Home/style";
import { Header } from "../../components/Header";
import { Content } from "../Home/style";
import { ShoeLargeCard } from "../../components/ShoeLargeCard";
import { FooterContainer } from "../Home/style";
import { Footer } from "../../components/Footer";

import veraobg from "../../assets/collectionimg/veraobg.svg";
import outonobg from "../../assets/collectionimg/outonobg.svg";
import invernobg from "../../assets/collectionimg/invernobg.svg";
import primaverabg from "../../assets/collectionimg/primaverabg.svg";

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
          <TitleSeason>
            Coleção <span>Verão 2023</span>
          </TitleSeason>
        </TitlesCollection>
      </Content>

      <SeasonContainer>
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
      </SeasonContainer>

      <Content>
        <TitleSeason>
          Coleção <span>Outono 2023</span>
        </TitleSeason>
      </Content>
      <SeasonContainer>
        <img src={outonobg} />
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
      </SeasonContainer>

      <Content>
        <TitleSeason>
          Coleção <span>Inverno 2023</span>
        </TitleSeason>
      </Content>
      <SeasonContainer>
        <img src={invernobg} />
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
      </SeasonContainer>

      <Content>
        <TitleSeason>
          Coleção <span>Primavera 2023</span>
        </TitleSeason>
      </Content>
      <SeasonContainer>
        <img src={primaverabg} />
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
      </SeasonContainer>
      <FooterContainer>
        <Content>
          <Footer />
        </Content>
      </FooterContainer>
    </Container>
  );
};
