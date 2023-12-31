import './App.css';
import ContactForm from './Componentes/ContactForm';
import CrudApi from './Componentes/CrudApi';
import CrudApp from './Componentes/CrudApp';
import Modals from './Componentes/Modals';
import SelectsAnidados from './Componentes/SelectsAnidados';
import SongSearch from './Componentes/SongSearch';

function App() {
  return (
    <div>
      <h2>EJERCICIOS CON REACT</h2>
      <hr/>
      <Modals/>
      <hr/>
      <ContactForm/>
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
