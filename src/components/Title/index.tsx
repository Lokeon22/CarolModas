import { Container } from "./style";
import star from "../../assets/icons/star.svg";

type TitleProps = {
  title: string;
  subtitle: string;
  firstGold?: string;
  secondGold?: string;
};

export const Title = ({
  title,
  subtitle,
  firstGold,
  secondGold,
}: TitleProps) => {
  return (
    <Container>
      <img src={star} alt="estrela icon" />
      <h2 style={{ color: firstGold }}>{title}</h2>
      <h2 style={{ color: secondGold }}>{subtitle}</h2>
    </Container>
  );
};
