import styled from "styled-components";

export const Container = styled.div`
  max-width: 360px;
  height: 100%;
  margin-bottom: 60px;

  img {
    width: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 13px;
      line-height: 20px;
      font-weight: 500;
    }

    h3 {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_5};
      font-weight: 500;
    }

    p {
      font-family: "Roboto", sans-serif;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      font-size: ${({ theme }) => theme.TYPOGRAPHY.BUTTON};
      font-weight: 400;
      letter-spacing: 0.25px;
    }
  }

  @media screen and (max-width: 768px) {
    max-width: 300px;
    margin-bottom: 30px;

    img {
      width: 100%;
    }
  }
`;
