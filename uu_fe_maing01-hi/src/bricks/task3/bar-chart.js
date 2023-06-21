//@@viewOn:imports
import { createVisualComponent, Utils, Content, DynamicLibraryComponent } from "uu5g05";
import Config from "./config/config.js";
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

const BarChart = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "BarChart",
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
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, BarChart);

    return currentNestingLevel ? (
      <div {...attrs}>
        {/* DynamicLibrary component, which gives me access to the Charts Bar graph */}
        {/* We declare the prop names here to use in the render of the component  */}
        <DynamicLibraryComponent
          uu5Tag={"UU5.SimpleChart.BarChart"}
          props={{ series: props.Task3Series, data: props.currentTask3Data }}
        ></DynamicLibraryComponent>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { BarChart };
export default BarChart;
//@@viewOff:exports
