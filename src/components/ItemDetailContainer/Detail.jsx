import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";


const Detail = ({ item }) => {
  const { id, categoria, nombre, descripcion, stock, img, precio, video } = item;

    const [terminar, setTerminar] = useState(false)

    const onAdd = (count) => {
          setTerminar(true)
    }

  return (
    <>
      <div className="container text-center">
        <div className="row">
 {/* ACA SE PONE UN PROTOTIPO */}
 <div id="carouselExampleIndicators" className="carousel slide col-md-6 p-2" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div className="carousel-inner">
    <div class="carousel-item active">
      <img src={img} className="d-block w-100 img3" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={video} className="d-block w-100 img3" alt="..."/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

 {/* TERMINA ACA EL PROTOTIPO */}


          <div className="col-md-6 p-1">
            <h1 className="pb-1">{nombre}</h1>
            <p className="pb-1">{descripcion}</p>
            <p className="pb-1">Precio: ${precio}</p>
            {terminar ? (
                  <Link to="/cart" className="btn btn-primary col-md-12 mt-3">
                  Terminar mi compra
                  </Link>
            ) : (<ItemCount stockItem={stock} inicialContador="1" onAdd={onAdd}  id={id}/>)
            }
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
