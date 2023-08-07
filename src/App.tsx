import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [step, setStep] = useState<number>(0);

  function changeColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    const elem = document.getElementById('mikita-liza');

    if(elem) {
      elem.style.color = '#'+randomColor;
    }
  }
  setInterval(changeColor, 2000);


  const obj = [
    {
      tooltip: '',
      path: '',
      description: '',
    },
    {
      tooltip: 'Гэта толькі пачатак, і я зараз не пра "КАПУСТУ" ',
      path: './1.jpg',
      description: 'Памятаеце, гэта мы разам былі ў Пінску, святкавалі маміна Дзень нараджэння, церлі нос пінчуку)))',
    },
    {
      tooltip: 'Мікіта так добра сціснуў Лізу, бо ен хвалюецца за яе',
      path: './2.jpg',
      description: 'А гэта мы ездзілі на Ляўкі, спрабавалі распаліць вогнішча, але змаглі гэта зрабіць, калі Ўжо паелі :(',
    },
    {
      tooltip: '3',
      path: './6.jpg',
      description: 'Гэта мы разам развітваемся з гольфам, як ніяк... А член (гэта не тое што вы падумалі) сям`і ',
    },
    {
      tooltip: '4',
      path: './4.jpg',
      description: 'Тут мы разам вырашылі першы раз памыць ужо нашу бмв!',
    },
    {
      tooltip: '5',
      path: './5.jpg',
      description: 'Той самы шпацыр у Пінску, і чым вам так спадабалася гэтая дамба?',
    },
    {
      tooltip: '6',
      path: './3.jpg',
      description: 'Выпілі грузінскі морс і надзелі нацыянальныя шапкі)',
    },
    {
      tooltip: '7',
      path: './7.jpg',
      description: 'Класнае падарожжа ў нясвіж, піца тады была ачмуральная!',
    },
  ]
   

  return (
    <div className="App">
      <header className="App-header">
        <h1 id='mikita-liza'>Mikita&Liza <br></br> вы былі з намі ў самыя важныя моманты нашага жыцця!</h1>
        {(step > 7 || step < 1) ? 
        <>
            <img src={logo} className="App-logo" alt="logo" />
            {step === 0 && <p className='tooltip'>Тыцкай па кнопачцы і мы пачнем нашу падарожжа!</p>} 
            {(step > 8 || step < 0) && <p className='error'>ЗНОЎ ТЫ ХОЧАШ УСЕ ЗЛАМАЦЬ!!</p>} 
        </> 
        : 
        <>
            <img src={obj[step].path} alt="logo" width="450px" height="400px" className='image' />
            <p className='description'>{obj[step].description}</p>
            <p className='tooltip'>{obj[step].tooltip}</p>
        </>
        }
        <div className="btn-wrap">
        <p
          className="App-link"
          onClick={() => setStep(step - 1)}
        >
          Предыдущее
        </p>
        <p
          className="App-link"
          onClick={() => setStep(step + 1)}
        >
          Следующее
        </p>
        </div>
      </header>
    </div>
  );
}

export default App;
