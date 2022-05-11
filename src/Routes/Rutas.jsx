import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import CategoryContainer from "../components/CategoryContainer/CategoryContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Layout from "../components/Layout/Layout";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<ItemListContainer greeting="TODOS LOS PRODUCTOS" />}
            />
            <Route path="/Item/:ItemId" element={<ItemDetailContainer />} />
            <Route
              path="/Category/:CategoryId"
              element={<CategoryContainer />}
            />
            <Route
              path="/Cart"
              element={<Cart />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
