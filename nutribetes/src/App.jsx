import './App.css';
import Logo from "./assets/logo.jpg"
import Fruits from "./assets/fruits.jpg"
import Fruits2 from "./assets/fruits2.png"
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

import Banner1 from "./assets/banner-1.png"

import Feed1 from "./assets/feedbacks/feed1.png"
import Feed2 from "./assets/feedbacks/feed2.jpeg"


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
            <p>Sou Claudineia Fiorini, nutricionista especialista em diabetes e contagem de <br />carboidratos, minha missão é tornar a alimentação uma aliada no seu <br />controle glicêmico.</p>
            <p>A nutrição não é apenas sobre o que comemos, é sobre como nosso corpo<br /> responde aos alimentos. Por isso, meu acompanhamento é exclusivo e<br /> individualizado, ajudando você a encontrar <br /> energia na medida certa.</p>
            <img src={Foto1} alt="foto1" className='foto1' />
            <div className='border1'></div>
          </div>
        </div>

        {/* TRANSIÇÃO 1 */}
        <div className='tran1'>
          <img src={Banner1} alt="banner1" className='banner1' />
          <img src={Logo2} alt="logo2" className='logo2' />
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

          <button><a href="https://api.whatsapp.com/send/?phone=5511997191101&text&type=phone_number&app_absent=0" target='blank' id='links'>Quero marcar uma consulta!<img src={Zap} alt="zap" className='zapbutton' /></a></button>
        </div>

        <div id='contact'>
          <h4>Como funciona o <br /> atendimento?</h4>
          <p>Individual – Acolhedor - Personalizado. <br />
            Antes mesmo do nosso encontro, já buscamos entender sua<br /> realidade
            hábitos alimentares, rotina familiar, valor calórico<br /> atual da alimentação
            e possíveis obstáculos no <br />controle da glicemia.
          </p>
          <div className='feedbacks'>
            <img src={Feed1} alt="feed1" className='feed1' />
            <img src={Feed2} alt="feed2" className='feed2' />
            <div className='border2'></div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <img src={Fruits2} alt="fruits" className='fruits2' />
        <img src={Logo2} alt="logo2" className='logo3' />
        <p>55 (11) 99719-1101</p>
        <div className='barra'></div>
        <div className='redesSociais'>
          <a href="https://api.whatsapp.com/send/?phone=5511997191101&text&type=phone_number&app_absent=0" target='blank' id='links'><img src={Zap} alt="zap" id='contactimg' /></a>
          <a href="https://www.instagram.com/neia.nutribetes/" target='blank' id='links'><img src={Insta} alt="insta" id='contactimg' /></a>
          <a href="https://www.facebook.com/profile.php?id=61574214601109" target='blank' id='links'><img src={Face} alt="face" id='contactimg' /></a>
          <p>©Nutribetes | Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;