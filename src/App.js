import './style/App.css';
import './style/normalize.css'
import InverterString from './InverterString'
import DestinoInteresse from './DestinoInteresse';

function App() {
  return (
    <div className="App">
      <h1 className='titulo'>Ally Hub Challenge 1</h1>
      <InverterString/>
      <h1 className='titulo'>Ally Hub Challenge 2</h1>
      <DestinoInteresse/>
    </div>
  );
}

export default App;
