import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Detail = ({ producto }) => {
  const { id, nombre, descripcion, stock, img, precio, video } = producto;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 p-2">
          <img className="img2 bg-dark" src={img} alt="" />
        </div>
        <div className="col-md-6 p-1">
            <h1 className="pb-1">{nombre}</h1>
            <p className="pb-1">{descripcion}</p>
            <p className="pb-1">Precio: ${precio}</p>
            <div className="video">{video}</div>

            <ItemCount stockItem={stock} inicialContador="1"/>
        </div>
      </div>
    </div>
  );
};

export default Detail;
