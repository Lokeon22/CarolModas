import { useEffect, useState } from "react";
import { products, category, summer } from "../services/fakeCMS";
import { ProdutosProps, ImagesShoesProps } from "../models";

export function useGetProducts() {
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);
  const [categoria, setCategoria] = useState<ImagesShoesProps[]>([]);
  const [verao, setVerao] = useState<ImagesShoesProps[]>([]);

  useEffect(() => {
    setProdutos(products);
    setCategoria(category);
    setVerao(summer);
  }, []);

  return {
    produtos,
    categoria,
    verao,
  };
}
