import { useEffect, useState } from "react";
import { products, category, summer } from "../services/fakeCMS";

export type ProdutosProps = {
  id: number;
  name: string;
  price?: string;
  photo: string;
};

export function useGetProducts() {
  const [produtos, setProdutos] = useState<ProdutosProps[]>([]);
  const [categoria, setCategoria] = useState<ProdutosProps[]>([]);
  const [verao, setVerao] = useState<ProdutosProps[]>([]);

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
