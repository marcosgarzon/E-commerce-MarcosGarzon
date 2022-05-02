import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList';
import { data } from '../Data/Data';



const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

  

  useEffect(() => {
    
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000);
    })
    promesa.then((res)=>{
      setItems(res)
    }).catch((err)=> console.log(err))
  
    return () => {
      
    }
  }, [])
  

  return (
    <div className='container'>
      <h2 className='bg-primary p-10'>{greeting}</h2>
      {/* <ItemCount parrafo={"Espada de tipo colosal utilizada antiguamente por la élite de origen noble"} texto="Espadón de noble" stockItem="7" inicialContador="1"/> */}
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer