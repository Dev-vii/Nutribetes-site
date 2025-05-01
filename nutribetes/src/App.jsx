import './App.css';
import Logo from "./assets/logo.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li>INTRODUÇÃO</li>
          <li>CONHEÇA</li>
          <li>SOBRE</li>
          <li>CONTATO</li>
        </ul>
      </header>

      <section>
        <div className='intro'>
          <h1>Texto de teste</h1>
          <img src={Logo} alt="logo" className='logo1'/>
        </div>
      </section>
      
    </div>
  );
}

export default App;