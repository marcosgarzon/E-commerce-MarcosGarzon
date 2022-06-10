import { useCartContext } from "../CartContext/CartContext";

function CartDetail({ ProuctCart }) {
  const { deleteFromCart } = useCartContext();
  const { cart } = useCartContext();

  const { id, nombre, precio, img, quantity } = ProuctCart;

  const subItemClick = (id) => {
    const findProduct = cart.find((producto) => producto.id === id);

    if (!findProduct) {
      alert("Error en la base de datos");
      return;
    }
    deleteFromCart(findProduct);
  };

  return (
    <>
      <div className="card p-1 m-auto mt-2 mb-2 col-6 col-md-6 col-lg-4">
        <div className="container">
          <div className="row m-auto col-12">
            <img src={img} className="card-img-top bg-dark img-fluid img3" />
            <div className="card-body text-center p-2">
              <h5 className="card-title">{nombre}</h5>
              <h6 className="card-text">Cantidad: {quantity}</h6>
              <h6 className="card-text">Precio: $ {precio}</h6>
            </div>
            <div className="card-list-group text-center p-2">
              <button
                className="btn btn-danger col-12 col-md-6 m-2"
                onClick={() => subItemClick(id)}
              >
                Eliminar item
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartDetail;
