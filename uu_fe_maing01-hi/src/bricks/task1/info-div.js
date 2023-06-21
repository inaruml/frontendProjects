//@@viewOn:imports
import { createVisualComponent, Utils, Content, PropTypes } from "uu5g05";
import Config from "../config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  infoCard: () =>
    Config.Css.css({
      border: "2px solid black",
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "15px",
      padding: "15px",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const InfoDiv = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "InfoDiv",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    name: PropTypes.text,
    value: PropTypes.number,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    unit: "",
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, InfoDiv);

    return currentNestingLevel ? (
      <div {...attrs}>
        <div className={Css.infoCard()}>
          <h2>{props.name}</h2>
          <p>
            {props.value}
            {props.unit}
          </p>
        </div>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { InfoDiv };
export default InfoDiv;
//@@viewOff:exports
