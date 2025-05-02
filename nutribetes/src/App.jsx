import './App.css';
import Logo from "./assets/logo.jpg"
import Fruits from "./assets/fruits.jpg"
import Foto1 from "./assets/foto1.JPG"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><a href="#intro" id='links'>INTRODUÇÃO</a></li>
          <li><a href="#meet" id='links'>CONHEÇA</a></li>
          <li><a href="#about" id='links'>SOBRE</a></li>
          <li>CONTATO</li>
        </ul>
      </header>

      <section>
        <div id='intro'>
          <img src={Fruits} alt="fruits" className='fruits' />
          <img src={Logo} alt="logo" className='logo1' />
          <h1>Claudineia Fiorini</h1>
        </div>

        <div id='meet'>
          <div className='textBox'>
            <h2>Nutricionista Claudineia Fiorini</h2>
            <p>Se você ou seu filho têm Diabetes Tipo 1, eu entendo os desafios diários que isso representa.</p>
            <p>A nutrição não é apenas sobre o que comemos – é sobre como nosso corpo<br /> responde aos alimentos. Por isso, meu acompanhamento é exclusivo e<br /> individualizado, ajudando você a encontrar Energia na Medida Certa.</p>
            <img src={Foto1} alt="foto1" className='foto1' />
            <div className='border1'></div>
          </div>
        </div>

        <div id='about'>
          <h3>A Nutribetes cuida de você com estratégia!</h3>
          <p>Cuidamos de você de forma integral</p>
          <table>
            <tr>
              <div>
                <h1>Diabetes <br />tipo 2</h1>
              </div>
              <div>
                <h1>Hipertensão <br />arterial</h1>
              </div>
              <div>
                <h1>Obesidade e sobrepeso</h1>
              </div>
              <div>
                <h1>Doenças cardiovasculares</h1>
              </div>
            </tr>
            <tr>
              <div>
                <h1>Colesterol <br />elevado</h1>
              </div>
              <div>
                <h1>Síndrome <br />metabólica</h1>
              </div>
              <div>
                <h1>Distúrbios da <br />tireoide</h1>
              </div>
            </tr>
          </table>
        </div>
      </section>

    </div>
  );
}

export default App;