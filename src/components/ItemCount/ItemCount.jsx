import React, { useState } from "react";
import royalgreatsword from "../../Assets/img/royalgreatsword.png";
import { useAppContext } from "../CartContext/AppContext";
import { useCartContext } from "../CartContext/CartContext";

const ItemCount = ({ stockItem, inicialContador, onAdd, id }) => {

  const [count, setCount] = useState(parseInt(inicialContador))
  const [stock1, setStock] = useState(stockItem)

  const {addToCart} = useCartContext()
  const {products} = useAppContext()

    const sumarItem = () => { 
        if (stock1 > count) {
            setCount(count + 1)
        }
    }

    const restarItem = () => { 
        if (count > 1) {
            setCount(count - 1)
        }
    }


    const handleClick = (id, cantidad) => {
      const findProduct = products.find((producto) => producto.id === id)

      if (!findProduct) {
          alert("Error en la base de datos")
          return
      }
      addToCart(findProduct, cantidad)
      onAdd(count)
    }

    // const enviarCarrito = () => {
    //     if (stock1 > 0 ) { 
    //     setStock(stock1 - count)
    //     setCount(parseInt(inicialContador))
    //   }
    // }

  return (

        <div className="container-fluid">
                      <div className="col-md.12"><p>Stock: {stock1}</p></div>

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
              <button className="btn btn-primary col-md-12 mt-3" onClick={()=>handleClick(id, count)} >
                Agregar al carrito
              </button>
            </div>
          </div>

  )
};

export default ItemCount;
