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
              <Link to={"/"}>Novidades</Link>
            </li>
            <li>
              <Link to="/collection">Coleções</Link>
            </li>
            <li>
              <Link to={"/"}>Categorias</Link>
            </li>
            <li>
              <Link to={"/"}>Blog</Link>
            </li>
          </ul>
        </Menu>
        <MenuMobile isVisible={isVisible} setIsVisible={setIsVisible} />
      </Content>
    </Container>
  );
};
