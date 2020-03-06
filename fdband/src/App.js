import React from 'react';
import './App.css';
import './stylesSettings/_reset.scss';
import './stylesSettings/_variables.scss';

import Routes from './routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
          <Header/>
          <Routes/>
          <Footer/>
    </div>
  );
}

export default App;
