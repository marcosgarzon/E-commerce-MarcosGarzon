import React, { useState } from 'react'


const input = ({...});

const Formulario = (total, compra) => {

const {formulario, setFormulario} = useState({
buyer: {
    email: "",
    nombre: "",
    apellido: "",
    telefono: "",
}, 
total: total, 
items: compra, 
});

const {buyer: { email, nombre, apellido, telefono},} = formulario; 


const onSubmit = (e) => {...} 


  return (
    <input value={buyer}   name="email" onChange={e => setFormulario(e.target.value)} />
  )
}

export default Formulario