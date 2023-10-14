import './App.css';
import Mensaje from './mensaje.js';
import Description from './description.js';


const App = () => {
  return (
    <div className='App'>
      <Mensaje color = 'red' message = 'Estamos trabajando en un curso de React'/>
      <Mensaje color = 'green' message = 'Estamos trabajando en un curso de React'/>
      <Description/>
    </div>
  );
};

export default App;
