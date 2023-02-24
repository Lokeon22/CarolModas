import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 27px;

  img {
    max-width: 67px;
    height: 52px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
      font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_4};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      font-weight: 400;
    }

    p {
      font-size: ${({ theme }) => theme.TYPOGRAPHY.BUTTON};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      font-weight: 300;
    }
  }

  @media screen and (max-width: 1000px) {
    gap: 10px;
  }

  @media screen and (max-width: 768px) {
    gap: 5px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
      width: 30px;
      height: 30px;
    }

    div {
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      h2 {
        font-size: 14px;
      }

      p {
        font-size: 12px;
      }
    }
  }
`;
