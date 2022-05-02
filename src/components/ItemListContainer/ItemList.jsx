import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-column flex-md-row justify-content-evenly col-md-12">
        {items.length > 0 ? (
          items.map((item) => (
            <Item key={item.id} item={item} />
          ))
        ) : (
          <h1> Cargando... </h1>
        )}
      </div>
    </div>
  );
};

export default ItemList;
