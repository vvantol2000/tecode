import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Navigation/Head';
import Banner from './components/Banner/Banner';
import FooterBase from './components/Footer/Footer-base';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <Header/>
                  <Banner/>
                  <FooterBase/>
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
