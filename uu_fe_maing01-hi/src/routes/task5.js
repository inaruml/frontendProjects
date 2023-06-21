//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import RouteBar from "../core/route-bar.js";
import Config from "./config/config.js";
import Uu5Elements, { GridTemplate } from "uu5g05-elements";

// jen importuju ten use
import { useColorScheme } from "../bricks/task5/use-color-scheme-context";

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
      marginTop: "60px",
      paddingLeft: "40px",
      paddingRight: "40px",
    }),
  button: () =>
    Config.Css.css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Task5 = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Task5",
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
    // Prepisu zpatky na context abych se v tom vyznala
    const colorSchemeContext = useColorScheme();

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Task5);

    return currentNestingLevel ? (
      <div {...attrs}>
        <RouteBar />
        <h1 className={Css.center()}>Domácí úkol 5</h1>

        {/* Selector Component for ColorScheme */}

        <section className={Config.Css.join(Css.center(), Css.section())}>
          <Uu5Elements.Block card="full" borderRadius="expressive" headerType="heading" level="2" header="Color Schema">
            {colorSchemeContext.colorSchemeSelector()}
          </Uu5Elements.Block>
        </section>

        <section className={Css.section()}>
          <Uu5Elements.Grid templateColumns={{ xl: "repeat(12, 1fr)" }}>
            {/*  Button  Component */}

            <Uu5Elements.Grid.Item colSpan={6} className={Css.button()}>
              <Uu5Elements.Button icon="mdi-star" colorScheme={colorSchemeContext.colorScheme}>
                Button
              </Uu5Elements.Button>
            </Uu5Elements.Grid.Item>

            {/*  HighlightedBox Component */}

            <Uu5Elements.Grid.Item colSpan={6}>
              <Uu5Elements.HighlightedBox colorScheme={colorSchemeContext.colorScheme}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut massa non eros laoreet consectetur
                nec non mi. Morbi a vestibulum orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. In
                ultrices pellentesque dui vitae elementum. Quisque accumsan risus condimentum, blandit diam vitae,
                commodo est. Proin volutpat mi ut neque commodo, id laoreet turpis rhoncus. Aliquam tempor ipsum sit
                amet ipsum eleifend, et vehicula orci fringilla. commodo est. Proin volutpat mi u commodo est. Proin
                volutpat mi u
              </Uu5Elements.HighlightedBox>
            </Uu5Elements.Grid.Item>
          </Uu5Elements.Grid>
        </section>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Task5 };
export default Task5;
//@@viewOff:exports
