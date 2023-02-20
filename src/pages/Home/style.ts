import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  max-width: 1600px;

  display: grid;
  grid-template-rows: 100px auto;
  grid-template-areas: "header" "content";
`;
