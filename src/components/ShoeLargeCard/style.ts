import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 600px;
  background: linear-gradient(
    204.06deg,
    #ededed 1.04%,
    #dddddd 41.3%,
    #b1b1b1 89.62%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 48px;

  img {
    width: 80%;
    object-fit: contain;
  }

  div {
    text-align: center;

    h2 {
      font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_5};
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      font-weight: 500;
      margin-top: 30px;
      margin-bottom: 10px;
    }

    p {
      font-size: ${({ theme }) => theme.TYPOGRAPHY.DEFAULT};
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    max-height: 300px;
    padding: 10px;
    margin: 0 auto;

    img {
      width: 125px;
    }

    div {
      h2 {
        margin-top: 15px;
        margin-bottom: 0px;
      }
    }
  }
`;
