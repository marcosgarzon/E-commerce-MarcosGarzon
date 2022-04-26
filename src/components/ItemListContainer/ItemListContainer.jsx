import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='container'><h2 className='bg-primary p-10'>{greeting}</h2><ItemCount parrafo={"Espada de tipo colosal utilizada antiguamente por la élite de origen noble"} texto="Espadón de noble" stockItem="7" inicialContador="0"/></div>
  )
}

export default ItemListContainer