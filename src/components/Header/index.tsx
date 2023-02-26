import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Content, Menu } from "./style";
import { MenuMobile } from "../MenuMobile";

import logo from "../../assets/logo.svg";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <Content>
        <Link to={"/"}>
          <img src={logo} alt="logo carol modas" />
        </Link>
        <Menu>
          <ul>
            <li>
              <a href="#">Novidades</a>
            </li>
            <li>
              <a href="#">Coleções</a>
            </li>
            <li>
              <a href="#">Categorias</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </Menu>
        <MenuMobile isVisible={isVisible} setIsVisible={setIsVisible} />
      </Content>
    </Container>
  );
};
