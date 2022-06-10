import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";
import CartDetail from "./CartDetail";
import Swal from "sweetalert2";
import Footer from "../Footer/Footer";

function Cart() {
  const { cart } = useCartContext();
  const { deleteCart } = useCartContext();

  const [emptyCart, setEmptyCart] = useState();
  const [total, setTotal] = useState();
  const [orderId, setOrderId] = useState();

  useEffect(() => {
    cartState();
    sumaTotal();
    setTimeout(() => {
      ticketCompra();
    }, 2000);
  }, [cart, orderId]);

  //funcion para mostrar ticket

  const ticketCompra = () => {
    orderId
      ? Swal.fire({
          title: "Ticket de compra:",
          text: orderId,
          icon: "info",
        })
      : console.log(orderId);
  };

  //Sumar Total
  function sumaTotal() {
    const sumAll = [];
    cart.forEach((e) => {
      sumAll.push(e.precio * e.quantity);
    });
    const sumWithInitial = sumAll.reduce(
      (previousValue, currentValuem, index) => previousValue + currentValuem,
      0
    );
    setTotal(sumWithInitial);
  }

  //Chequear si hay carrito
  function cartState() {
    if (!cart.length) {
      setEmptyCart(true);
    } else {
      setEmptyCart(false);
    }
  }

  //Crear orden de compra
  const SendCart = () => {
    //User traido de los input
    const buyer = {
      name: { nombre },
      phone: { phone },
      email: { email },
    };

    //Extraer datos útiles del carrito
    const cartData = cart.map(({ id, nombre, precio, quantity }) => ({
      id,
      nombre,
      precio,
      cantidad: quantity,
    }));
    //Confiugrar Orden de compra
    const order = {
      buyer: buyer,
      item: cartData,
      date: Date(),
      total: total,
    };
    // Llevar a firebase
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    
    //Eliminar elementos del carrito
    deleteCart();
  };

  // completar los campos con los input

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");

  const handleInput = (e) => {
    switch (e.target.name) {
      case "phone":
        setPhone(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "nombre":
        setNombre(e.target.value);
        break;
      default:
        break;
    }
  };

  // Validar

  const validar = (val) => {
    return val.some((val) => val === "");
  };

  // SweetAlert2 y generar orden

  const onSubmit = (e) => {
    e.preventDefault();
    if (validar([phone, email, nombre])) {
      Swal.fire({
        title: "¡Cuidado!",
        text: "Debe completar todos los campos",
        icon: "warning",
      });
      return;
    }
    Swal.fire({
      title: `Su orden de compra se genero correctamente, aguarde`,
      text: orderId,
      icon: "success",
    });
    SendCart();
  };

  return (
    <>
      <div className="container-fluid">
        {emptyCart ? (
          <div className="row d-flex flex-column flex-md-row justify-content-evenly FixHeight2">
            <h1 className="text-center m-auto p-4">El carrito está vacio</h1>
            <div className="row m-auto col-12 d-flex flex-column align-content-center">
              <Link
                className="btn btn-primary p-2 col-12 col-md-6 m-2"
                to={`/`}
              >
                Volver a la tienda
              </Link>
            </div>
          </div>
        ) : (
          <div className="row d-flex flex-column flex-md-row justify-content-evenly">
            {cart.map((p) => (
              <CartDetail key={p.id} ProuctCart={p} />
            ))}
            <div className="row text-center m-auto p-4">
              <h2>Total: ${total}</h2>
              <div className="mb-4">
                <button
                  className="btn btn-danger col-10 col-md-3 m-auto mt-4 p-2"
                  onClick={() => deleteCart()}
                >
                  Borrar todo el carrito
                </button>
              </div>
              <div className="container border solid">
                <form
                  onSubmit={onSubmit}
                  className="form needs-validation"
                  id="form"
                  noValidate
                >
                  <h1 className="pt-4">Formulario de compra</h1>
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div className="form-group p-2">
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleInput}
                          name="nombre"
                          placeholder="Nombre"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group p-2">
                        <input
                          type="email"
                          className="form-control needs-validation"
                          onChange={handleInput}
                          id="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group p-2">
                        <input
                          type="text"
                          className="form-control"
                          onChange={handleInput}
                          name="phone"
                          id="phone"
                          placeholder="Teléfono"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="form"
                    className="btn btn-primary col-10 col-md-3 m-auto mt-4 p-2"
                    required
                  >
                    Finalizar compra
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
