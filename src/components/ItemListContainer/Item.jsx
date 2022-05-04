import React from "react";
import royalgreatsword from "../../Assets/img/royalgreatsword.png";


const Item = ({item}) => {

  const {id, nombre, descripcion, stock, img, precio} = item;


  return (
    <>
    <div className="card p-1 m-1 col-md-3 d-flex over-wow">
      <img src={img} className="card-img-top bg-dark img-fluid img1" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
      </div>
      <div className="card-list-group">		
        <p className="card-text">Stock: {stock}</p>	
        <p className="card-text">Precio: $ {precio}</p>	
      </div>
      <div className="card-list-group">
        <button className="btn btn-primary col-md-12 mt-3">Ver detalle</button>   
      </div>
    </div>
  </>
  )
}

export default Item