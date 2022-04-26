import React, { useState } from "react";
import royalgreatsword from "../../Assets/img/royalgreatsword.png";

const ItemCount = ({ texto, color, parrafo, imagen, stockItem, inicialContador }) => {
  const [count, setCount] = useState(parseInt(inicialContador))
    const [stock, setStock] = useState(stockItem)
    const sumarItem = () => { 
        if (stock > count) {
            setCount(count + 1)
        }
    }
    const restarItem = () => { 
        if (count > 0) {
            setCount(count - 1)
        }
    }
    const enviarCarrito = () => {
        setStock(stock - count)
        setCount(parseInt(inicialContador))
    }
  return (
    <div className={`card ${color}`} style={{ width: "15rem" }}>
      <img src={imagen || royalgreatsword} className="card-img-top bg-dark" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{texto}</h5>
        <p className="card-text">{parrafo}</p>
        <p className="p-4 "> Stock = {stock} </p>
        <div className="container-fluid">

            <div className="d-flex justify-content-between border border-5 rounded">
            <div className="" >
              <button className="btn btn-secondary" style={{ height: "100%" }} onClick={restarItem}>{" - "}</button>
            </div>
            <div className="align-items-center">
              <p className="m-2">{count}</p>
            </div>
            <div className="" >
              <button className="btn btn-secondary " style={{ height: "100%" }} onClick={sumarItem}>{" + "}</button>
            </div>
            </div>
            <div>
              <button className="btn btn-primary col-md-12 mt-3" onClick={enviarCarrito}>
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
  )
};

export default ItemCount;
