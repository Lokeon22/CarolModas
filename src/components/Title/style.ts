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
`;
