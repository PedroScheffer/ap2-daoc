import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Forms from './components/Forms/Forms';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header title="Entrevero" subtitle="@computacaotorres" />
      <Welcome name="Pedro" />
      <Forms />
      <Cards />
      <Footer title="Desenvolvido por Pedro Scheffer Gonçalves" subtitle="Footer Subtitle" />
    </div>
  );
}

export default App;
