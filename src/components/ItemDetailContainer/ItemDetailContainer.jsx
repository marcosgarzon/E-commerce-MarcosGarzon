import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Detail from "./Detail";

function ItemDetailContainer() {
  const { itemId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    getItem();
  }, [itemId]);

  const getItem = () => {
    const getItemPromise = new Promise((res, rej) => {
      const db = getFirestore();

      const itemCollection = collection(db, "productos");
      getDocs(itemCollection).then((snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        res(items);
      });
    });

    getItemPromise.then((data) => {
      setProduct(data.find((d) => d.id == itemId));
    });
  };


  return (
    <>
      {!product.img ? (
        <div className="position-absolute top-50 start-50 translate-middle">
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
        <Detail item={product} />
      )}
    </>
  );
}
export default ItemDetailContainer;
