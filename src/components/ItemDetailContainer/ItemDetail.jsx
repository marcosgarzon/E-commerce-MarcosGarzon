import React from "react";
import Detail from "./Detail";

const ItemDetail = ({ productos }) => {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-column flex-md-row justify-content-evenly col-md-12">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <Detail key={producto.id} producto={producto} />
          ))
        ) : (
          <h1> Cargando... </h1>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;