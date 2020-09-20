import React from "react";
import "./resources/styles.css";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import Venue from "./components/venue";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Footer from "./components/header_footer/Footer";
import Location from "./components/location";

import { Button } from "@material-ui/core";
import { Element } from "react-scroll";

function App() {
  return (
    <div
      className="App"
      style={{ 
        height: "1500px", 
        background: "cornflowerblue" 
      }}
    >

      <Header />

      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venuenfo">
        <Venue />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Button />
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      
      <Footer />
    </div>
  );
}

export default App;
