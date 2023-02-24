import { Container } from "./style";

import postsbg from "../../assets/postsbg.svg";

export const PostsCard = () => {
  return (
    <Container>
      <img src={postsbg} />
      <div>
        <span>13 de Fevereiro de 2023</span>
        <h3>Tendencias para o verão de 2023</h3>
        <p>
          Fala pro cliente que a compilação final do programa superou o
          desempenho de estados estáticos nos componentes da UI.
        </p>
      </div>
    </Container>
  );
};
