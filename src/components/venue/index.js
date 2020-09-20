import React from "react";
import icon_calendar from "../../resources/images/icons/calendar.png";
import icon_location from "../../resources/images/icons/location.png";
import Zoom from "react-reveal/Zoom";

const Venue = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom duration={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${icon_calendar})` }}
                  ></div>
                  <div className="vn_title">Event Dates</div>
                  <div className="vn_desc">7th September-25th December</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={500}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${icon_location})` }}
                  ></div>
                  <div className="vn_title">Event Locations</div>
                  <div className="vn_desc">JioWorld Garden, Mumbai</div>
                </div>
              </div>
            </div>
          </Zoom>

          <Zoom duration={500} delay={1000}>
            <div className="vn_item">
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div
                    className="vn_icon"
                    style={{ background: `url(${icon_calendar})` }}
                  ></div>
                  <div className="vn_title">Event Organizers</div>
                  <div className="vn_desc">Timtim Events, Bastu Events</div>
                </div>
              </div>
            </div>
          </Zoom>

        </div>
      </div>
    </div>
  );
};

export default Venue;
