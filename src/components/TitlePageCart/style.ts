import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;

  h2 {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_1};
    font-weight: 300;
  }

  @media screen and (max-width: 1280px) {
    h2 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 5px;
    margin-bottom: 15px;

    img {
      width: 60px;
      height: 50px;
    }

    h2 {
      font-size: 25px;
    }
  }
`;
