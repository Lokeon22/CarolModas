import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 27px;

  img {
    width: 72px;
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
`;
