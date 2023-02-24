import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin-bottom: 55px;

  p {
    max-width: 612px;
    font-size: 15px;
    font-weight: 300;
    line-height: 22px;
    color: black;
    margin-bottom: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 75px;

  @media screen and (max-width: 1280px) {
    gap: 20px;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }

  > div {
    max-width: 360px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
    padding: 60px;

    @media screen and (max-width: 1000px) {
      max-width: 100%;
      align-self: flex-start;
      flex-wrap: wrap;
      gap: 0px;
      padding: 5px;
    }

    background: linear-gradient(
      270deg,
      #564c30 0%,
      #ccb67a 65.39%,
      #d6ceb8 100%
    );
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    gap: 40px;

    > div {
      display: flex;
      gap: 40px;
    }

    input {
      width: 100%;
      height: 65px;
      padding: 20px 25px;
      background: transparent;
      border-color: #ccb67a;

      ::placeholder {
        color: black;
      }
    }

    textarea {
      width: 100%;
      height: 150px;
      padding: 20px 25px;
      resize: none;
      border: 2px solid #ccb67a;
      background: transparent;

      ::placeholder {
        color: black;
      }
    }

    button {
      max-width: 135px;
      padding: 10px 40px;
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      font-size: ${({ theme }) => theme.TYPOGRAPHY.BUTTON};
      color: ${({ theme }) => theme.COLORS.BROWN_300};
      background: linear-gradient(
        to left,
        rgb(86, 76, 48),
        rgb(204, 182, 122),
        rgb(214, 206, 184)
      );
      text-transform: uppercase;
      letter-spacing: 1.25px;
      border: none;
      :hover {
        opacity: 0.9;
        transition: all 0.4s ease;
      }
    }
  }
`;

export const IconsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  padding: 20px 30px;
  gap: 10px;

  @media screen and (max-width: 1000px) {
    padding: 15px;
    background-color: transparent;

    div {
      display: flex;
      justify-content: start;
      align-items: center;
      gap: 10px;
    }
  }

  img {
    width: 32px;
    height: 32px;
  }

  div {
    width: 100%;

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 15px;
      font-weight: 500;
    }

    span {
      color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT_200};
      font-size: 13px;
      font-weight: 400;
    }
  }
`;
