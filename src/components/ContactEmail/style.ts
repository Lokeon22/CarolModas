import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  gap: 40px;

  > div {
    display: flex;
    gap: 40px;
  }

  input {
    width: 100%;
    height: 65px;
    padding: 20px 25px;
    background: transparent;
    border-color: #ccb67a;

    ::placeholder {
      color: black;
    }
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 20px 25px;
    resize: none;
    border: 2px solid #ccb67a;
    background: transparent;

    ::placeholder {
      color: black;
    }
  }

  button {
    max-width: 135px;
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

  @media screen and (max-width: 768px) {
    gap: 20px;

    > div {
      flex-direction: column;
      gap: 20px;
    }
  }
`;
