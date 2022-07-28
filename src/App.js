import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './scss/app.scss';
import { main } from '@popperjs/core';

function App() {
  return (

    <div className="App-header">
      <header>
        <NavBar />
      </header>
      <main>
        <ItemListContainer greeting={'Hola mundo'} />
      </main>
    </div>
  );
}

export default App;
