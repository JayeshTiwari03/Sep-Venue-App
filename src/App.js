import React from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/highlights";
import { Button } from "@material-ui/core";
import Pricing from "./components/pricing";
import Footer from "./components/header_footer/Footer";

function App() {
  return (
    <div
      className="App"
      style={{ height: "1500px", background: "cornflowerblue" }}
    >
      <Header />
      <Featured />
      <VenueNfo />
      <Highlights />
      <Button />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
