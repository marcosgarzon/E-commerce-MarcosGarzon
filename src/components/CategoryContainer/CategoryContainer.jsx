import React, { useEffect, useState } from "react";
import { data } from "../Data/Data";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemListContainer/ItemList";

function CategoryContainer() {
  const [product, setProduct] = useState(null);
  const { CategoryId } = useParams();

  const producto = data.filter((item) => item.categoria === CategoryId);

  useEffect(() => {
    getItem();
    return () => {};
  }, [CategoryId]);

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
        <ItemList items={product} />
      ) : (
        <h1 className="text-center">Cargando...</h1>
      )}
    </>
  );
}

export default CategoryContainer;
