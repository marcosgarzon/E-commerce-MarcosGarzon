import React, { useEffect, useState } from "react";
import { data } from "../Data/Data";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

  const [productos, setProductos] = useState([])
 
  const getItems = () => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data)
        }, 2000);
      })
      promesa.then((res)=>{
        setProductos(res)
      }).catch((err)=> console.log(err))
  
  }

  useEffect(() => {
    
    getItems()

    return () => {
      
    }
  }, [])




  return (
    <>
      <ItemDetail productos={productos}/>
    </>
  )
}

export default ItemDetailContainer

  