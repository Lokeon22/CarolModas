import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Content = styled.div`
  width: 100%;
  padding: 0px 200px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 260px;
    height: auto;
  }

  @media screen and (max-width: 1300px) {
    padding: 0px 50px;
  }
`;

export const Menu = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    gap: 31px;

    li {
      font-size: ${({ theme }) => theme.TYPOGRAPHY.BUTTON};
      font-weight: 300;

      a {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }
`;
