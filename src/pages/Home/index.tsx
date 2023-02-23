import {
  Container,
  PromotionBanner,
  IconsContainer,
  Content,
  ShoeCardContainer,
  ContentCategory,
  FilterCategoryContainer,
  SummerContainer,
  SummerBgContent,
  SummerCardContainer,
} from "./style";

import { useGetProducts } from "../../hooks/useGetProducts";

import { IconCard } from "../../components/IconCard";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { ShoeLargeCard } from "../../components/ShoeLargeCard";
import { Button } from "../../components/Button";
import { FilterCategoryCard } from "../../components/FilterCategoryCard";

import scarpins from "../../assets/scarpins.png";
import money from "../../assets/icons/money.svg";
import truck from "../../assets/icons/truck.svg";
import credit from "../../assets/icons/credit.svg";
import summerbg from "../../assets/summerbg.svg";

export const Home = () => {
  const { produtos, categoria, verao } = useGetProducts();

  return (
    <Container>
      <Header />
      <PromotionBanner>
        <img src={scarpins} alt="banner produto carol modas" />
        <IconsContainer>
          <IconCard
            image={money}
            title="Descontos"
            description="Compre Agora."
          />
          <IconCard
            image={truck}
            title="Retire Grátis"
            description="Compre Agora."
          />
          <IconCard
            image={credit}
            title="Parceclamento"
            description="Até 12x sem juros"
          />
        </IconsContainer>
      </PromotionBanner>
      <Content>
        <Title title="Acabaram de " subtitle="Chegar" secondGold="#715100" />
        <ShoeCardContainer>
          {produtos.length > 0 ? (
            produtos.map((produto) => (
              <ShoeLargeCard key={produto.id} produto={produto} />
            ))
          ) : (
            <h2>Carregando...</h2>
          )}
        </ShoeCardContainer>
        <Button text="Ver Mais" />
      </Content>
      <ContentCategory>
        <Content>
          <Title
            title="Filtrar Por "
            subtitle="Categoria"
            firstGold="#C8B507"
            secondGold="WHITE"
          />
          <FilterCategoryContainer>
            {categoria.length > 0 ? (
              categoria.map((produtoCategory) => (
                <FilterCategoryCard
                  key={produtoCategory.id}
                  produto={produtoCategory}
                />
              ))
            ) : (
              <h2>Carregando...</h2>
            )}
          </FilterCategoryContainer>
        </Content>
      </ContentCategory>
      <Content>
        <Title title="Coleção" subtitle="summer" secondGold="#715100" />
        <SummerContainer>
          <SummerBgContent>
            <img src={summerbg} />
            <div>
              <h2>
                Moda <span>Praia</span> <br /> Selecionada <br /> A partir de{" "}
                <br /> <span>R$ 119,90</span>
              </h2>
            </div>
          </SummerBgContent>

          <SummerCardContainer>
            {verao.length > 0 ? (
              verao.map((produtoVerao) => (
                <FilterCategoryCard
                  key={produtoVerao.id}
                  produto={produtoVerao}
                />
              ))
            ) : (
              <h2>Carregando...</h2>
            )}
          </SummerCardContainer>
        </SummerContainer>
        <Button text="Conferir" />
      </Content>
    </Container>
  );
};
