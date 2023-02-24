import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  margin-top: 77px;
  margin-bottom: 100px;

  h2 {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_1};
    font-weight: 300;
  }

  @media screen and (max-width: 768px) {
    gap: 5px;
    margin-top: 38px;
    margin-bottom: 50px;

    img {
      width: 60px;
      height: 50px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;
