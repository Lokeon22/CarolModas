import { useState, useEffect } from "react";
import { ImagesShoesProps } from "../../models";
import { imagesCart, interessar } from "../../services/fakeCMS";

import {
  CardInfoContainer,
  InfoContainer,
  InfoContent,
  ShoeText,
  MoreImagesContainer,
  MoreImagesCard,
  InterestContainer,
} from "./style";

import { Container } from "../Home/style";
import { Content } from "../Home/style";
import { FooterContainer } from "../Home/style";

import { Header } from "../../components/Header";
import { TitlePageCart } from "../../components/TitlePageCart";
import { ShoeInfosCard } from "../../components/ShoeInfosCard";
import { FilterCategoryCard } from "../../components/FilterCategoryCard";
import { Footer } from "../../components/Footer";

import shoered from "../../assets/cartimg/shoered.svg";

export const Cart = () => {
  const [imagesShoes, setImagesShoes] = useState<ImagesShoesProps[]>([]);
  const [interestShoes, setInterestShoes] = useState<ImagesShoesProps[]>([]);

  useEffect(() => {
    setImagesShoes(imagesCart);
    setInterestShoes(interessar);
  }, []);

  return (
    <Container>
      <Header />
      <CardInfoContainer>
        <Content>
          <ShoeInfosCard />
        </Content>
      </CardInfoContainer>
      <InfoContainer>
        <Content>
          <InfoContent>
            <ShoeText>
              <TitlePageCart title="Informações do Sapato" color="white" />
              <p>
                Este sapato é a escolha ideal para a mulher moderna que busca
                uma combinação perfeita de estilo e conforto. Seu design
                sofisticado apresenta um salto triangular, que proporciona uma
                estabilidade maior do que um salto agulha convencional,
                tornando-o perfeito para uso diário ou em eventos mais formais.
              </p>
              <p>
                A cor rosé, suave e delicada, confere um toque de elegância e
                feminilidade ao sapato, tornando-o uma opção versátil para
                combinar com diversos estilos e roupas. A palmilha macia
                proporciona um conforto duradouro aos seus pés, para que você
                possa usá-lo o dia todo sem se sentir cansada.
              </p>
              <p>
                Com uma tira no tornozelo para proporcionar suporte adicional ou
                totalmente aberto no calcanhar, este sapato é o complemento
                perfeito para seu guarda-roupa. Então, se você está procurando
                por um sapato elegante e moderno, que possa ser usado em
                diversas ocasiões, não procure mais. Nosso sapato de salto
                triangular rosé é a escolha perfeita para a mulher que não abre
                mão do conforto e da elegância.
              </p>
            </ShoeText>
            <img src={shoered} alt="sapato vermelho" />
          </InfoContent>
        </Content>
      </InfoContainer>

      <Content>
        <MoreImagesContainer>
          <TitlePageCart title="Mais Imagens do Sapato" color="black" />
          <MoreImagesCard>
            {imagesShoes.length > 0 ? (
              imagesShoes.map((shoe) => (
                <img key={shoe.id} src={shoe.photo} alt={shoe.name} />
              ))
            ) : (
              <h2>Carregando...</h2>
            )}
          </MoreImagesCard>
        </MoreImagesContainer>
        <TitlePageCart title="Sapatos que Podem lhe Interessar" color="black" />
        <InterestContainer>
          {interestShoes.length > 0 ? (
            interestShoes.map((shoeInt) => (
              <FilterCategoryCard key={shoeInt.id} produto={shoeInt} />
            ))
          ) : (
            <h2>Carregando...</h2>
          )}
        </InterestContainer>
      </Content>
      <FooterContainer>
        <Content>
          <Footer />
        </Content>
      </FooterContainer>
    </Container>
  );
};
