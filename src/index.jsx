import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProjectsDesign } from './components/ProjectDesign';
import { ProjectsDev } from './components/ProjectsDev';
import { ProjectsDevCoop } from './components/ProjectsDevCoop';


const App = () => {
  const [color, setColor] = useState(false);

    const handleColorChange = () => {
        setColor(!color);
    }

    console.log('App = ' + color);


    var randomColor = 50 + Math.floor(Math.random()*150);

    console.log ('randomColor = ' + randomColor);


    const magicColor = () => {
      if (color == true){
        return ('rgb(210, 90,' + randomColor + ')')
      }
      else {
        return 'white'
      }
    }
   
    console.log(magicColor());

    return (
      <div className='container' style={{backgroundColor: magicColor()}}>
        <Header onMagicClick={handleColorChange}/>
        <ProjectsDev />
        <ProjectsDevCoop/>
        <ProjectsDesign/>
        <Footer/>
      </div>
    /* 
    <div className="container">
      <header>
        <div className="logo" />
        <h1>React webová aplikace</h1>
      </header>
      
      <main>
        <p>
          Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí
          <a href="https://www.npmjs.com/package/create-czechitas-app">create-czechitas-app</a>
          .
        </p>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div> */
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
