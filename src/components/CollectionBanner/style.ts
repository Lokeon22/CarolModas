import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  img {
    max-width: 560px;
  }

  div {
    display: flex;
    align-items: center;
    width: 300px;
    height: 400px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.77);
    top: 17%;
    left: 0;
    right: 0;
    bottom: 0;

    h2 {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_3};
      font-weight: 600;
      line-height: 50px;
      padding: 0px 10px;

      span {
        color: ${({ theme }) => theme.COLORS.GOLD_100};
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    img {
      width: 90%;
    }

    div {
      width: 200px;
      height: 250px;

      h2 {
        font-size: 22px;
      }
    }
  }
`;
