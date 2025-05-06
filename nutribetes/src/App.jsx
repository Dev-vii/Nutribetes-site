import './App.css';
import Logo from "./assets/logo.jpg"
import Fruits from "./assets/fruits.jpg"
import Foto1 from "./assets/foto1.JPG"
import Logo2 from "./assets/logo2.png"

import Diabetes2 from "./assets/img/diabetes.png"
import Hipertensão from "./assets/img/hipert.png"
import Obesidade from "./assets/img/obesidade.png"
import Cardio from "./assets/img/cardio.png"
import Colesterol from "./assets/img/colesterol.png"
import Metabólica from "./assets/img/metabolic.png"
import Tireoide from "./assets/img/tireoide.png"

import Zap from "./assets/redes/zap.png"
import Insta from "./assets/redes/insta.png"
import Face from "./assets/redes/face.png"


// git@github.com:Dev-vii/Nutribetes-site.git = chave

function App() {
  return (
    <div className="App">

      {/* HEADER */}
      <header className="App-header">
        <ul>
          <li><a href="#intro" id='links'>INTRODUÇÃO</a></li>
          <li><a href="#meet" id='links'>CONHEÇA</a></li>
          <li><a href="#about" id='links'>SOBRE</a></li>
          <li><a href="#contact" id='links'>CONTATO</a></li>
        </ul>
      </header>

      <section>
        {/* INTRODUÇÃO */}
        <div id='intro'>
          <img src={Fruits} alt="fruits" className='fruits' />
          <img src={Logo} alt="logo" className='logo1' />
          <h1>Claudineia Fiorini</h1>
        </div>

        <div id='meet'>
          {/* BIOGRAFIA */}
          <div className='textBox'>
            <h2>Nutricionista Claudineia Fiorini</h2>
            <p>Se você ou seu filho têm Diabetes Tipo 1, eu entendo os desafios diários que isso representa.</p>
            <p>A nutrição não é apenas sobre o que comemos – é sobre como nosso corpo<br /> responde aos alimentos. Por isso, meu acompanhamento é exclusivo e<br /> individualizado, ajudando você a encontrar Energia na Medida Certa.</p>
            <img src={Foto1} alt="foto1" className='foto1' />
            <div className='border1'></div>
          </div>
        </div>

    <div className='test'>
      <img src={Logo2} alt="logo2" />
    </div>


        <div id='about'>
          {/* SEÇÃO SOBRE */}
          <h3>A Nutribetes cuida de você com estratégia!</h3>
          <p>Cuidamos de você de forma integral</p>
          <table>

            {/* CARTÕES */}
            <tr>
              <div id='Infocards'>
                <h1>Diabetes <br />tipo 2</h1>
                <p>Ajudamos você a<br /> equilibrar a glicemia<br /> com uma alimentação prática, saborosa e <br />possível.</p>
                <img src={Diabetes2} alt="diabetes2" id='ImgBox' />
              </div>
              <div id='Infocards'>
                <h1>Hipertensão <br />arterial</h1>
                <p>Estratégias alimentares específicas para regular<br /> a pressão sem sacrifícios extremos.</p>
                <img src={Hipertensão} alt="hipert" id='ImgBox' />
              </div>
              <div id='Infocards'>
                <h1>Obesidade e sobrepeso</h1>
                <p>Cuidado sem culpa, com foco em resultados<br /> reais e sustentáveis.</p>
                <img src={Obesidade} alt="obesidade" id='ImgBox' />
              </div>
              <div id='Infocards'>
                <h1>Doenças cardiovasculares</h1>
                <p>Prevenção e controle<br /> com uma nutrição aliada<br /> à saúde cardíaca.</p>
                <img src={Cardio} alt="cardio" id='ImgBox' />
              </div>
            </tr>
            <tr>
              <div id='Infocards'>
                <h1>Colesterol <br />elevado</h1>
                <p>Mudança de hábitos<br /> com foco na saúde do coração.</p>
                <img src={Colesterol} alt="diabetes2" id='ImgBox' />
              </div>
              <div id='Infocards'>
                <h1>Síndrome <br />metabólica</h1>
                <p>Um plano nutricional completo para restaurar<br /> o equilíbrio metabólico.</p>
                <img src={Metabólica} alt="diabetes2" id='ImgBox' />
              </div>
              <div id='Infocards'>
                <h1>Distúrbios da <br />tireoide</h1>
                <p>Suporte nutricional para modular o metabolismo, melhorar o humor e<br /> o bem-estar.</p>
                <img src={Tireoide} alt="diabetes2" id='ImgBox' />
              </div>
            </tr>
          </table>

          <button><a href="#contact" id='links'>Quer marcar uma consulta?</a></button>
        </div>

        <div id='contact'>
          <h4>Vamos marcar uma consulta?</h4>
        </div>
      </section>

      <footer>
        <div className='redesSociais'>
          <img src={Zap} alt="zap" id='contactimg' />
          <img src={Insta} alt="insta" id='contactimg' />
          <img src={Face} alt="face" id='contactimg' />
        </div>
      </footer>

    </div>
  );
}

export default App;