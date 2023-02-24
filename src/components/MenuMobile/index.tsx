import { MenuClose, MenuOpen } from "./style";

import burguer from "../../assets/icons/socials/burguer.svg";
import close from "../../assets/icons/socials/close.svg";

type MenuProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuMobile = ({ isVisible, setIsVisible }: MenuProps) => {
  return (
    <MenuClose>
      <img
        src={burguer}
        onClick={() => setIsVisible(true)}
        style={{ display: isVisible ? "none" : "block" }}
      />
      <MenuOpen style={{ display: isVisible ? "flex" : "none" }}>
        <img src={close} onClick={() => setIsVisible(false)} />
        <nav>
          <a href="#">Novidades</a>
          <a href="#">Coleções</a>
          <a href="#">Categorias</a>
          <a href="#">Blog</a>
        </nav>
      </MenuOpen>
    </MenuClose>
  );
};
