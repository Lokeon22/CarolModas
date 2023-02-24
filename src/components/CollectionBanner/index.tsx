import { Container } from "./style";

type CollectionProps = {
  text1: string;
  text2: string;
  pricegold: string;
  color?: string;
  image: string;
};

export const CollectionBanner = ({
  text1,
  text2,
  pricegold,
  color,
  image,
}: CollectionProps) => {
  return (
    <Container>
      <img src={image} />
      <div style={{ left: color ? "46.5%" : "0", top: color ? "13%" : "17%" }}>
        <h2>
          {text1}{" "}
          <span style={{ color: color ? "#AC7C00" : "#EAD413" }}>{text2}</span>{" "}
          <br /> Selecionada <br /> A partir de <br />{" "}
          <span>R$ {pricegold}</span>
        </h2>
      </div>
    </Container>
  );
};
