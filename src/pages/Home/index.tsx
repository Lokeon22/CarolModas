import {
  Container,
  PromotionBanner,
  IconsContainer,
  Content,
  ShoeCardContainer,
  ContentCategory,
  FilterCategoryContainer,
  SummerContainer,
  InstagramIcon,
  FallCollection,
  FallContainer,
  PostsCardContainer,
  ContactContainer,
  FooterContainer,
} from "./style";

import { useGetProducts } from "../../hooks/useGetProducts";

import { IconCard } from "../../components/IconCard";
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { ShoeLargeCard } from "../../components/ShoeLargeCard";
import { Button } from "../../components/Button";
import { FilterCategoryCard } from "../../components/FilterCategoryCard";
import { CollectionBanner } from "../../components/CollectionBanner";
import { PostsCard } from "../../components/PostsCard";
import { ContactModal } from "../../components/ContactModal";
import { Footer } from "../../components/Footer";

import scarpins from "../../assets/scarpins.png";
import money from "../../assets/icons/money.svg";
import truck from "../../assets/icons/truck.svg";
import credit from "../../assets/icons/credit.svg";
import summerbg from "../../assets/summerbg.svg";
import fallbg from "../../assets/fallbg.svg";
import instalarge from "../../assets/icons/instaLarge.svg";

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
          <CollectionBanner
            image={summerbg}
            text1="Moda"
            text2="Praia"
            pricegold="119,90"
          />

          <section>
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
          </section>
        </SummerContainer>
        <Button text="Conferir" />
      </Content>
      <ContentCategory>
        <Content>
          <Title
            title="Confira nosso "
            subtitle="Instagram"
            firstGold="#DEDCCF"
            secondGold="white"
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
            <InstagramIcon>
              <img src={instalarge} alt="" />
            </InstagramIcon>
          </FilterCategoryContainer>
        </Content>
      </ContentCategory>
      <FallCollection>
        <Content>
          <Title title="Coleção " subtitle="fall" secondGold="#715100" />
          <FallContainer>
            <CollectionBanner
              image={fallbg}
              text1="Coleção"
              text2="Outono"
              pricegold="259,90"
              color="true"
            />

            <section>
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
            </section>
          </FallContainer>
          <Button text="Conferir" />
        </Content>
      </FallCollection>
      <Content>
        <Title title="Últimas " subtitle="Postagens" secondGold="#715100" />
        <PostsCardContainer>
          <PostsCard />
          <PostsCard />
          <PostsCard />
        </PostsCardContainer>
      </Content>
      <ContactContainer>
        <Content>
          <Title title="Contato" subtitle="" />
          <ContactModal />
        </Content>
      </ContactContainer>
      <FooterContainer>
        <Content>
          <Footer />
        </Content>
      </FooterContainer>
    </Container>
  );
};
