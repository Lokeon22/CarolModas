import {
  Container,
  PromotionBanner,
  IconsContainer,
  Content,
  ShoeCardContainer,
  ContentCategory,
} from "./style";

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

import sandalia from "../../assets/categoryImg/sandalia.svg";

export const Home = () => {
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
          <ShoeLargeCard />
          <ShoeLargeCard />
          <ShoeLargeCard />
          <ShoeLargeCard />
          <ShoeLargeCard />
          <ShoeLargeCard />
        </ShoeCardContainer>
        <Button text="Ver Mais" />
      </Content>
      <ContentCategory>
        <Content>
          <Title
            title="Filtrar por "
            subtitle="Categoria"
            firstGold="#C8B507"
            secondGold="WHITE"
          />
          <FilterCategoryCard image={sandalia} />
        </Content>
      </ContentCategory>
    </Container>
  );
};
