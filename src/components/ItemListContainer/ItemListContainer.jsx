import ItemList from './ItemList'
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, where, query, doc} from "firebase/firestore";
import { useParams } from 'react-router-dom';
import db from '../../Service/Firebase';
import Footer from '../Footer/Footer';


const ItemListContainer = ({greeting}) => {

  const { categoryId } = useParams();
  
  const [products, setProducts] = useState([])

	useEffect(() => {
		

		const productos = collection(db, "productos")

    if (categoryId) {
      const q = query(collection(db, "productos"), where("categoria1", "==", categoryId) )
      getDocs(q).then(snapshot => {
        setProducts(snapshot.docs.map((doc) => ( { ...doc.data() } )))
      })
    } else {
      getDocs(productos).then(snapshot => {
        setProducts(snapshot.docs.map((doc) => ( { ...doc.data() } )))
      })
    }
	}, [categoryId])


	
  return (
    <>
		 <>
      <div className="container-fluid bg-secondary">
          <h1 className="p-5 text-light text-center">{greeting}</h1>
          <ItemList items={products}/>   
          
      </div>  
      <div>
      <Footer/>
      </div>
		 </>
    </>
  )
}

export default ItemListContainer