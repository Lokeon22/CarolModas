import { Container } from "./style";
import star from "../../assets/icons/star.svg";

type TitleCartProps = {
  title: string;
  color: string;
};

export const TitlePageCart = ({ title, color }: TitleCartProps) => {
  return (
    <Container>
      <img src={star} alt="estrela icon" />
      <h2 style={{ color: color }}>{title}</h2>
    </Container>
  );
};
