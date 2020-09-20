import React, { Component } from "react";
import MyButton from "../../components/utils/MyButton";
import Zoom from "react-reveal/Zoom";

export default class Pricing extends Component {
  state = {
    prices: [100, 200, 300, 400],
    positions: ["L-1 Top", "L-2 Middle", "L-3 Front", "L-4 Stand"],
    desc: ["Topmost seats with limited view of the stage", "Middle seats with easy access to F&Bs section", "Front row seated with clear view of artist", "Standing arrangement closest to the main stage"],
    linkto: ["/", "/", "/", "/"],
    delay: [500, 0, 500, 600],
  };

  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons"></div>
            <MyButton
              text="Purchase"
              bck="#ffa800"
              color="#ffffff"
              link={this.state.linkto[i]}
            ></MyButton>
          </div>
        </div>
      </Zoom>
    ));

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>

          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}
