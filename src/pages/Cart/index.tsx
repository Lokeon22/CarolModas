import { Container } from "./style";
import { Header } from "../../components/Header";
import { Content } from "../Home/style";
import { ShoeInfosCard } from "../../components/ShoeInfosCard";

export const Cart = () => {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <ShoeInfosCard />
        </Content>
      </Container>
    </>
  );
};
