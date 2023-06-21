//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, useEffect } from "uu5g05";
import Config from "../config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Time = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Time",
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

    {
      /* Clock v Reactu */
    }

    const [clockState, setClockState] = useState();

    useEffect(() => {
      setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
      }, 1000);
    }, []);

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Time);

    return currentNestingLevel ? <div {...attrs}>{clockState}</div> : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Time };
export default Time;
//@@viewOff:exports
