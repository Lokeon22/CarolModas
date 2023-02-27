import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  height: 100%;
  padding-top: 100px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: 1000px) {
    padding-top: 0px;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    max-width: fit-content;
    height: 100%;
    flex-direction: column;
    padding: 0px 10px;
    margin: 0 auto;
  }
`;

export const ShoeImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(89.91deg, #f5f3f3 0.09%, #eee5e5 99.92%);
  padding: 98px 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 300px;
    height: 100%;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 50px 60px;

    img {
      max-width: 300px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 25px 30px;

    img {
      width: 100%;
    }
  }
`;

export const ShoeInfos = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: initial;

  h2 {
    font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_3};
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    line-height: 50px;
  }

  h3 {
    font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_4};
    font-weight: 400;
    line-height: 34px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    margin-top: 32px;
    margin-bottom: 24px;
  }

  p {
    font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_5};
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > span {
      margin-left: 20px;
    }
  }

  a {
    font-family: "Roboto", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    max-width: 250px;
    font-size: ${({ theme }) => theme.TYPOGRAPHY.BUTTON};
    color: ${({ theme }) => theme.COLORS.BROWN_300};
    font-weight: 500;
    text-transform: uppercase;
    background: #ead413;
    margin-top: 30px;
    margin-bottom: 60px;
    border: 0;
    padding: 12px 28px;
  }

  span {
    max-width: 35ch;
    font-family: "Roboto", sans-serif;
    font-size: ${({ theme }) => theme.TYPOGRAPHY.DEFAULT};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0.5px;
  }

  @media screen and (max-width: 1000px) {
    justify-content: center;

    h2 {
      font-size: 23px;
      line-height: 40px;
    }

    a {
      margin: 20px 0px;
    }

    span {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px) {
  }
`;
