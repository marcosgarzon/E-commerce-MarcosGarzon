import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="TODOS LOS PRODUCTOS"/>     
      <ItemDetailContainer />
    </div>
  );
}

export default App;
