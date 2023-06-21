//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "../config/config.js";
import Uu5Elements from "uu5g05-elements";

// RouteBar component is on every route
import RouteBar from "../core/route-bar.js";

import ShoppingMall from "../bricks/task2/shopping-mall.js";

//@@viewOff:imports

//@@viewOn:constants

//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  center: () =>
    Config.Css.css({
      textAlign: "center",
    }),
  section: () =>
    Config.Css.css({
      paddingLeft: "40px",
      paddingRight: "40px",
      margin: "30px",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Task2 = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Task2",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Task2);

    return currentNestingLevel ? (
      <div {...attrs}>
        <RouteBar />
        <section>
          <h1 className={Css.center()}>Domácí úkol 2</h1>
        </section>
        <section className={Css.section()}>
          <ShoppingMall name="Nákupní centrum"></ShoppingMall>
        </section>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Task2 };
export default Task2;
//@@viewOff:exports
