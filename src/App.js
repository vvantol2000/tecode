import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Signup from "./pages/SignUp";
import Portfolio from './pages/Portfolio/Portfolio'
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
            <Route component={Portfolio}  path="/portfolio" />
              <div className="pv-40 dark-translucent-bg">
                <div className="container">
                  <div className="row justify-content-lg-center">
                    <div className="col-lg-8 text-center pv-20">
                      <div className="hc-element-invisible" data-animation-effect="fadeIn" data-effect-delay="100">
                        <p className="small">Tecode Projects</p>
                        <h1 className="page-title text-center">Coming Soon</h1>
                        <div className="separator"></div>
                        <div className="countdown clearfix"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <FooterBase />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
