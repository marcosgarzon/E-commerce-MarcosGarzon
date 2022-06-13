import { Link } from "react-router-dom"

const Header = () => {

    
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row m-0 p-0 mb-5 header__container d-flex flex-column justify-content-center align-items-center align-items-md-start">
          <h1 className="text-light header__h1 fs-1 text-center text-md-start ms-md-5 p-0">Tienda de mate</h1>
          <p className="text-light header__h1 fs-3 text-center text-md-start ms-md-5 p-0">La felicidad empieza por un mate</p>
        </div>
      </div>
    </>
  )
}
export default Header