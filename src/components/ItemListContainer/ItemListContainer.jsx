import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { data } from "../Data/Data";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
    promesa
      .then((res) => {
        setItems(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container text-center">
      <h2 className="bg-primary text-center p-10">{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
