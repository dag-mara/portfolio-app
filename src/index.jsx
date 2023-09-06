import React, { useState } from 'react';
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

  var randomColor = 50 + Math.floor(Math.random() * 150);


  const magicColor = () => {
    if (color == true) {
      return ('rgb(210, 90,' + randomColor + ')')
    }
    else {
      return 'white'
    }
  }

  return (
    <div className='container' style={{ backgroundColor: magicColor() }}>
      <Header onMagicClick={handleColorChange} />
      <ProjectsDev />
      <ProjectsDevCoop />
      <ProjectsDesign />
      <Footer />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
