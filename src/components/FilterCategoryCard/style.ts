import styled from "styled-components";

export const Container = styled.div`
  max-width: 260px;
  height: 300px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 40px 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  }

  background: linear-gradient(
    204.06deg,
    #ededed 1.04%,
    #dddddd 41.3%,
    #b1b1b1 89.62%
  );

  @media screen and (max-width: 768px) {
    max-width: 250px;
    max-height: 250px;
    gap: 30px;
    padding: 30px;
  }
`;
