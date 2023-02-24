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

  padding: 0px 200px;

  @media screen and (max-width: 1500px) {
    padding: 0px 100px;
  }

  @media screen and (max-width: 1280px) {
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

export const FilterCategoryContainer = styled.div`
  position: relative;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-bottom: 60px;
  z-index: 1;
`;

export const SummerContainer = styled.div`
  width: 100%;
  display: flex;

  > section {
    display: flex;
    justify-content: baseline;
    align-self: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > section {
      justify-content: center;
      align-items: center;
    }
  }
`;

export const InstagramIcon = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: -1;

  img {
    position: absolute;
    top: -500px;
    left: 82%;
    right: 0;
    bottom: 0;
  }

  @media screen and (max-width: 1280px) {
    img {
      top: -830px;
      left: 60%;
    }
  }
`;

export const FallCollection = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT_200};
`;

export const FallContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;

  > section {
    display: flex;
    justify-content: end;
    align-self: center;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 1250px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > section {
      justify-content: center;
      align-items: center;
    }
  }
`;

export const PostsCardContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
`;

export const ContactContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT_200};
`;

export const FooterContainer = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;
