import styled from "styled-components";

export const CardInfoContainer = styled.section`
  width: 100%;
  height: 700px;

  background-color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT_100};

  @media screen and (max-width: 1000px) {
    height: 100%;
    padding: 40px 0px;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 0px;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const InfoContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; // space-around or between /ajuste para layout
  align-items: flex-start;
  padding: 70px 0px;
  gap: 100px; // if space-between +70px

  img {
    max-width: 300px;
    height: 100%;
  }

  @media screen and (max-width: 1280px) {
    align-items: center;
    padding: 50px 0px;
    gap: 50px;

    > img {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
    gap: 30px;
  }
`;

export const ShoeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;

  p {
    max-width: 80ch;
    color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT_100};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: ${({ theme }) => theme.TYPOGRAPHY.DEFAULT};
    line-height: 19px;
  }

  @media screen and (max-width: 768px) {
    gap: 15px;

    p {
      font-size: 14px;
    }
  }
`;

export const MoreImagesContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin: 80px 0px;

  @media screen and (max-width: 1000px) {
    margin: 40px 0px;
  }

  @media screen and (max-width: 768px) {
    margin: 20px 0px;
  }
`;

export const MoreImagesCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 50px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 40px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 0px;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;

export const InterestContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin: 80px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;

  @media screen and (max-width: 1000px) {
    margin: 20px 0px;
    gap: 25px;
  }

  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;
