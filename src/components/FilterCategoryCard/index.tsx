import { Container } from "./style";

type FilterCategoryProps = {
  image: string;
};

export const FilterCategoryCard = ({ image }: FilterCategoryProps) => {
  return (
    <Container>
      <img src={image} alt="sapatos" />
    </Container>
  );
};
