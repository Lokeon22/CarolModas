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
`;
