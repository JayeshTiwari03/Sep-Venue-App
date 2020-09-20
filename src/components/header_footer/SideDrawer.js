import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { scroller } from "react-scroll";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Home";
import PlaceIcon from "@material-ui/icons/Place";
import HighlightIcon from "@material-ui/icons/Highlight";
import PriceIcon from "@material-ui/icons/Money";
import LocationIcon from "@material-ui/icons/Map";

const SideDrawer = (props) => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    props.onClose(false);
  };

  return (
    <div>
      <Drawer
        position="fixed"
        anchor="right"
        open={props.open}
        onClose={() => props.onClose(false)}
      >
        <List component="nav">
          <ListItem button onClick={() => scrollToElement("featured")}>
            <ListItemIcon>
              {" "}
              <InboxIcon />{" "}
            </ListItemIcon>

            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={() => scrollToElement("venuenfo")}>
            <ListItemIcon>
              <PlaceIcon />
            </ListItemIcon>
            <ListItemText>Venue</ListItemText>
          </ListItem>

          <ListItem button onClick={() => scrollToElement("highlights")}>
            <ListItemIcon>
              <HighlightIcon />
            </ListItemIcon>

            <ListItemText>Highlights</ListItemText>
          </ListItem>

          <ListItem button onClick={() => scrollToElement("pricing")}>
            <ListItemIcon>
              <PriceIcon />
            </ListItemIcon>

            <ListItemText>Pricing</ListItemText>
          </ListItem>

          <ListItem button onClick={() => scrollToElement("location")}>
            <ListItemIcon>
              <LocationIcon />
            </ListItemIcon>

            <ListItemText>Location</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideDrawer;
