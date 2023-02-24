import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100%;
  margin: 80px 0px;

  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;

  @media screen and (max-width: 1280px) {
    grid-template-columns: 2fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Logo = styled.div`
  img {
    width: 60%;
  }

  p {
    max-width: 55ch;
    color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT_200};
    letter-spacing: 0.5px;
  }
`;

export const Pagamentos = styled.div`
  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_5};
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;

    li {
      margin-top: 5px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: ${({ theme }) => theme.TYPOGRAPHY.BUTTON};
      font-weight: 300;
    }
  }
`;

export const Midias = styled.div`
  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_5};
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Suporte = styled.div`
  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.TYPOGRAPHY.TITLE_5};
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.TYPOGRAPHY.BUTTON};
    font-weight: 300;
    margin-top: 10px;
  }
`;
