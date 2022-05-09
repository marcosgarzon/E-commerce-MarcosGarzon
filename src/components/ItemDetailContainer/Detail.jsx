import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";

const Detail = ({ product }) => {
  const { id, categoria, nombre, descripcion, stock, img, precio, video } = product;
  

  return (
    <>
    <div className="container text-center">
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
    </>
  );
};

export default Detail;
