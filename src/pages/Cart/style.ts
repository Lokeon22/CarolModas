import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 700px;

  background-color: ${({ theme }) => theme.COLORS.YELLOW_LIGHT_100};

  @media screen and (max-width: 1000px) {
    height: auto;
    padding: 40px 0px;
  }
`;
