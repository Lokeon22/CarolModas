import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 80px;
  margin-bottom: 60px;

  button {
    padding: 10px 40px;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    font-size: ${({ theme }) => theme.TYPOGRAPHY.BUTTON};
    color: ${({ theme }) => theme.COLORS.BROWN_300};
    background: linear-gradient(
      to left,
      rgb(86, 76, 48),
      rgb(204, 182, 122),
      rgb(214, 206, 184)
    );
    text-transform: uppercase;
    letter-spacing: 1.25px;
    border: none;
    :hover {
      opacity: 0.9;
      transition: all 0.4s ease;
    }
  }
`;
