import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import AppContextProvider from "../components/CartContext/AppContext";
import CartContextProvider from "../components/CartContext/CartContext";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import Layout from "../components/Layout/Layout";

const Rutas = () => {
  return (
    <>
      <AppContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route
                  index
                  element={<ItemListContainer/>}
                />
                <Route
                  path={`/itemListContainer/:categoryId`}
                  element={<ItemListContainer />}
                />
                <Route path="/Item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/Cart" element={<Cart />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </>
  );
};

export default Rutas;
