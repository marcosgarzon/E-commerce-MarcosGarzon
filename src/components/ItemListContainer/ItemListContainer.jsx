import React, { useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList';




const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

  const data = [
      {
        id:1, 
        nombre: "Blasphemous Blade",
        descripcion: "Espada sagrada de Rykard, Señor de la Blasfemia. Los restos de los innumerables héroes que ha devorado se retuercen sobre el superficie de esta cuchilla.",
        stock: 10,
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/blasphemous_blade_weapon_elden_ring_wiki_guide_200px.png',
        precio: 1500
      },
      {
        id:2, 
        nombre: "Dark Moon Greatsword",
        descripcion: "Una gran espada lunar, otorgada por una reina Cariana a su cónyuge para honrar una tradición de larga data. Uno de los armamentos legendarios.",
        stock: 6,
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/dark_moon_greatsword_weapon_elden_ring_wiki_guide_200px.png',
        precio: 1000
      },
      {
        id:3, 
        nombre: "Sacred Relic sword",
        descripcion: "Espada forjada con los restos de un dios que debería haber vivido una vida eterna. Los pensamientos sobre lo que presagia el arma son muchos y variados.",
        stock: 10,
        img: 'https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacred_relic_sword.png',
        precio: 3000
      }

  ];

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