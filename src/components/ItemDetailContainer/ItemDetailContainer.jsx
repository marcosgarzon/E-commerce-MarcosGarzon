import React, { useEffect, useState } from "react";
import { data } from "../Data/Data";
import { Link, useParams } from "react-router-dom";
import Detail from "./Detail";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { ItemId } = useParams();

  const producto = data.find((item) => item.id === Number(ItemId));

  useEffect(() => {
    getItem();
    return () => {};
  }, []);

  const getItem = () => {
    const getItemPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(producto);
      }, 2000);
    });
    getItemPromise.then((res) => setProduct(res));
  };

  return (
    <>
      {product ? (
        <Detail product={product} />
      ) : (
        <h1 className="text-center">Cargando...</h1>
      )}
    </>
  );
}

export default ItemDetailContainer;
