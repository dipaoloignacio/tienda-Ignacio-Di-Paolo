import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './scss/app.scss';
import { main } from '@popperjs/core';

function App() {
  const urlApi = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

  return (
    <>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;
