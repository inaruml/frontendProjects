//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "../config/config.js";

//@@viewOff:imports

import GraphImage from "../../assets/graph.jpg";

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  evaluation: () =>
    Config.Css.css({
      border: "2px solid black",
      marginBottom: "20px",
      padding: "15px",
    }),
  graphImage: () =>
    Config.Css.css({
      width: "100%",
      height: "auto",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Evaluation = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Evaluation",
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
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Evaluation);

    return currentNestingLevel ? (
      <div {...attrs}>
        {props.children}
        <div className={Css.evaluation()}>
          <img src={GraphImage} className={Css.graphImage()} alt="graph" />
        </div>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Evaluation };
export default Evaluation;
//@@viewOff:exports
