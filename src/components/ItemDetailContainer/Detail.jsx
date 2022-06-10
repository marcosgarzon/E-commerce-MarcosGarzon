import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from "../Footer/Footer";
import { useCartContext } from "../CartContext/CartContext";

const Detail = ({ item }) => {
  const { id, nombre, descripcion, stock, img, precio, video } =
    item;


  const { isInCart } = useCartContext();



  return (
    <>
      <div className="container text-center pt-4">
        <div className="row">
          <div
            id="carouselExampleIndicators"
            className="carousel slide col-md-6"
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div class="carousel-item active">
                <img src={img} className="d-block w-100 h-100 img3" alt="..." />
              </div>
              <div class="carousel-item">
                <img
                  src={video}
                  className="d-block w-100 h-100 img3"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="col-md-6 p-1 FixHeight">
            <h1 className="pb-1">{nombre}</h1>
            <p className="pb-1">{descripcion}</p>
            <p>
              {" "}
              Envío sin cargo a todo el país <TbTruckDelivery />
            </p>
            <p> Hasta 12 cuotas sin interés con tarjeta de crédito </p>
            <p className="pb-1">Precio: ${precio}</p>
            {!isInCart(id) ? (
              <ItemCount
                stockItem={stock}
                inicialContador="1"
                
                id={id}
              />
            ) : (
              <Link to="/cart" className="btn btn-primary col-md-12 mt-3">
                Terminar mi compra
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="text-center container pt-4 pb-4">
        <h6 className="encabezado">¿Cómo comprar?</h6>
        <p className="pt-4 pb-4">
          Podes comprar de forma online desde este sitio. Elegí los productos
          que quieras de las distintas categorías y agregalas a tu carrito. Una
          vez que terminaste de elegir hace click en "terminar compra". Es
          importante que escribas correctamente tu mail, ya que allí te van a
          llegar todas las notificaciones de compra, pago y envío al igual que
          todos los datos que se solicitan, los cuales son necesarios para poder
          efectuar las entregas a nuestros clientes.
        </p>
      </div>
      <div className="text-end mb-auto">
        <Footer />
      </div>
    </>
  );
};

export default Detail;
