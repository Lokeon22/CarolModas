import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 100px auto;
  grid-template-areas: "header" "content";
`;

export const PromotionBanner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 550px;
    object-fit: center;
  }

  @media screen and (max-width: 1600px) {
    // Tamanho original da imagem 1600px
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;

export const IconsContainer = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 95px;
  padding: 0px 20px;

  background-color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT_200};

  @media screen and (max-width: 1000px) {
    gap: 20px;
  }
`;

export const Content = styled.section`
  //Section responsavel por agrupar o conteudo dentro do desing - 200px auto 200px
  width: 100%;
  height: 100%;

  padding: 0px 200px;

  @media screen and (max-width: 1300px) {
    padding: 0px 50px;
  }
`;

export const ShoeCardContainer = styled.section`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // quebra pro mobile
`;

export const ContentCategory = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;
