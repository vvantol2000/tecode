import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Signup from "./pages/SignUp";
import Header from "./components/Navigation/Head";
import Banner from "./components/Banner/Banner";
import Modal from "./components/Modal";
import Section from './components/Section/Section'
import FooterBase from "./components/Footer/Footer-base";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Banner />
            <Route component={Signup} exact path="/page-signup" />
            <Section>
                <Modal/>
            </Section>
            <FooterBase />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
