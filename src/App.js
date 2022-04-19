import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="TODOS LOS PRODUCTOS"/>
    </div>
  );
}

export default App;
