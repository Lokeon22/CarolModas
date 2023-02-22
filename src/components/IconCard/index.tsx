import { Container } from "./style";

type IconCardProps = {
  image: string;
  title: string;
  description: string;
};

export const IconCard = ({ image, title, description }: IconCardProps) => {
  return (
    <Container>
      <img src={image} alt="cartao icon" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Container>
  );
};
