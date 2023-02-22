import { Container } from "./style";

type TextProps = {
  text: string;
};

export const Button = ({ text }: TextProps) => {
  return (
    <Container>
      <button type="button">{text}</button>
    </Container>
  );
};
