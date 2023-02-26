import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Collection } from "../pages/Collection";
import { Cart } from "../pages/Cart";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collection" element={<Collection />} />
      <Route path="/cart/:id" element={<Cart />} />
    </Routes>
  );
};
