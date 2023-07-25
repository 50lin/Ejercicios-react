import './App.css';
import HolaMundo from './HolaMundo.js';
import Contador from './Contador.js';
import ListaDeTareas from './ListaDeTareas.js';
import RelojDigital from './RelojDigital.js';
import GaleriaImagenes from './GaleriaImagenes.js';

function App() {
  
  const imagenes = [
    {
        titulo: 'Imagen 1',
        url: 'https://placehold.co/400',
    },
    {
        titulo: 'Imagen 2',
        url: 'https://placehold.co/400',
    },
    {
        titulo: 'Imagen 3',
        url: 'https://placehold.co/400',
    },
];
  
  return (
    <div className='App'>
      <header className='App-header'>
        < HolaMundo />
      </header>
      <div>
        <Contador />
      </div>
      <div>
        <ListaDeTareas />
      </div>
      <div>
        <RelojDigital />
      </div>
      <div>
        <GaleriaImagenes imagenes={imagenes} />
      </div>
    </div>
  )
}

export default App;
