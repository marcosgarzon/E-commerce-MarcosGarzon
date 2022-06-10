import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function MateList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const q = query(
      collection(db, "productos"),
      where("categoria1", "==", "mate")
    );
    getDocs(q).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ ...doc.data() })));
    });
  }, []);

  return (
    <>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li>
          <Link to={`/itemListContainer/${"mate"}`} className="dropdown-item">
            Todo
          </Link>
        </li>
        {products.map((l) => (
          <li key={l.id}>
            <Link to={`Item/${l.id}`} className="dropdown-item">
              {l.nombre1}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MateList;
