import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Container } from './components/Container';
import { MagicProvider } from './magic-context';


const App = () => {
  return (
    <MagicProvider>
      <Container/>
    </MagicProvider>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
