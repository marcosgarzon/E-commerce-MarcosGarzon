import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import db from "../../Service/Firebase";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productos = collection(db, "productos");

    if (categoryId) {
      const q = query(
        collection(db, "productos"),
        where("categoria1", "==", categoryId)
      );
      getDocs(q).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data() })));
      });
    } else {
      getDocs(productos).then((snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data() })));
      });
    }
  }, [categoryId]);

  return (
    <>
      <div className="container-fluid m-0 p-0 bg-secondary">
        <Header/>
        {!products.length > 0 ? (
          <div className="text-center">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <>
          
          <ItemList items={products} />
          </>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default ItemListContainer;
