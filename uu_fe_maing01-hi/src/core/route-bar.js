//@@viewOn:imports
import { createVisualComponent, Lsi, useRoute } from "uu5g05";
import Plus4U5App from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import importLsi from "../lsi/import-lsi.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const RouteBar = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "RouteBar",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const [, setRoute] = useRoute();

    const appActionList = [
      { children: <Lsi import={importLsi} path={["Menu", "dashboard"]} />, onClick: () => setRoute("dashboard") }, // This line has been added
      //{ children: <Lsi import={importLsi} path={["Menu", "home"]} />, onClick: () => setRoute("home") },
      {
        children: <Lsi import={importLsi} path={["Menu", "about"]} />,
        onClick: () => setRoute("about"),
        collapsed: true,
      },
      { children: <Lsi import={importLsi} path={["Menu", "task1"]} />, onClick: () => setRoute("task1") }, // This line has been added
      { children: <Lsi import={importLsi} path={["Menu", "task2"]} />, onClick: () => setRoute("task2") }, // This line has been added
      { children: <Lsi import={importLsi} path={["Menu", "task4"]} />, onClick: () => setRoute("task4") }, // This line has been added
      { children: <Lsi import={importLsi} path={["Menu", "task5"]} />, onClick: () => setRoute("task5") }, // This line has been added
    ];
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return <Plus4U5App.RouteBar appActionList={appActionList} {...props} />;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { RouteBar };
export default RouteBar;
//@@viewOff:exports
