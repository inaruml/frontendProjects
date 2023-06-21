//@@viewOn:imports
import { createVisualComponent, Utils } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5 from "uu_plus4u5g02";
import Plus4U5App from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Home from "../routes/home.js";
import Dashboard from "../routes/dashboard.js";

import ColorSchemeProvider from "../bricks/task5/color-scheme-provider.js";
//@@viewOff:imports

//@@viewOn:constants
const About = Utils.Component.lazy(() => import("../routes/about.js"));
const InitAppWorkspace = Utils.Component.lazy(() => import("../routes/init-app-workspace.js"));
const ControlPanel = Utils.Component.lazy(() => import("../routes/control-panel.js"));
const Task1 = Utils.Component.lazy(() => import("../routes/task1.js"));
const Task2 = Utils.Component.lazy(() => import("../routes/task2.js"));
const Task4 = Utils.Component.lazy(() => import("../routes/task4.js"));
const Task5 = Utils.Component.lazy(() => import("../routes/task5.js"));

const ROUTE_MAP = {
  "": { redirect: "dashboard" },
  home: (props) => <Home {...props} />,
  about: (props) => <About {...props} />,
  "sys/uuAppWorkspace/initUve": (props) => <InitAppWorkspace {...props} />,
  controlPanel: (props) => <ControlPanel {...props} />,
  "*": () => (
    <Uu5Elements.Text category="story" segment="heading" type="h1">
      Not Found
    </Uu5Elements.Text>
  ),
  task1: (props) => <Task1 {...props} />, // This line has been added
  task2: (props) => <Task2 {...props} />, // This line has been added
  dashboard: (props) => <Dashboard {...props} />, // This line has been added
  task4: (props) => <Task4 {...props} />, // This line has been added
  task5: (props) => <Task5 {...props} />, // This line has been added
};
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Spa = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Spa",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Plus4U5.SpaProvider initialLanguageList={["en", "cs"]}>
        {/*  Provider ColorScheme Component to provide to all SPA */}
        <ColorSchemeProvider colorSchemeList={["blue", "dark-purple", "cyan"]}>
          <Uu5Elements.ModalBus>
            <Plus4U5App.Spa routeMap={ROUTE_MAP} />
          </Uu5Elements.ModalBus>
        </ColorSchemeProvider>
      </Plus4U5.SpaProvider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Spa };
export default Spa;
//@@viewOff:exports
