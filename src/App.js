import './App.css';
import CrudApi from './Componentes/CrudApi';
import CrudApp from './Componentes/CrudApp';
import SelectsAnidados from './Componentes/SelectsAnidados';
import SongSearch from './Componentes/SongSearch';

function App() {
  return (
    <div>
      <h2>EJERCICIOS CON REACT</h2>
      <hr/>
      <SelectsAnidados/>
      <hr/>
      <SongSearch/>
      <hr/>
      <CrudApi/>
      <hr/>
      <CrudApp/>
      <hr/>
      
    </div>
  );
}

export default App;
