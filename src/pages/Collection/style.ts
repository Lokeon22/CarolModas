import styled from "styled-components";

export const TitlesCollection = styled.div`
  width: 100%;
  height: 100%;

  padding: 0px 25px;
  margin-top: 80px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    text-align: center;
    font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_1};
    font-weight: 300;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    margin-bottom: 60px;
  }

  span {
    background-clip: initial;
    background: linear-gradient(
      to left,
      rgb(86, 76, 48),
      rgb(204, 182, 122),
      rgb(214, 206, 184)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 768px) {
    padding: 0px 5px;
    margin-top: 20px;

    h2 {
      font-size: 30px;
      margin-bottom: 15px;
    }
  }
`;

export const TitleSeason = styled.h3`
  font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_2};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-weight: 400;
  margin-bottom: 80px;

  span {
    background-clip: initial;
    background: linear-gradient(
      to left,
      rgb(86, 76, 48),
      rgb(204, 182, 122),
      rgb(214, 206, 184)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
    margin-bottom: 40px;
  }
`;

export const SeasonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  > img {
    position: absolute;
    width: 100%;
    height: 600px;
    object-fit: cover;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media screen and (max-width: 1600px) {
    > img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;

export const ShoeCollectionContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 25%;
  margin-bottom: 120px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // quebra pro mobile

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0px;

    margin-bottom: 40px;
  }
`;
