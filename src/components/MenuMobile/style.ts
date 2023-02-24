import styled from "styled-components";

export const MenuClose = styled.div`
  img {
    width: 35px;
    height: 35px;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export const MenuOpen = styled.div`
  img {
    width: 18px;
    height: 18px;
    margin-right: 7px;
    z-index: 3;
  }

  nav {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      270deg,
      #564c30 0%,
      #ccb67a 65.39%,
      #d6ceb8 100%
    );

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    z-index: 2;

    a {
      font-size: 20px;
      color: white;
      text-transform: uppercase;
    }
  }
`;
