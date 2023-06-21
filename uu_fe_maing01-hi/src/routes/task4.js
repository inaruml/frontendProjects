//@@viewOn:imports
import { createVisualComponent, Utils, Content, useMemo, useRef, useState, DynamicLibraryComponent } from "uu5g05";
import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";

import CarList from "../bricks/data/autobazar.json";
import FilterModal from "../bricks/task4/filter-modal.js";
import RouteBar from "../core/route-bar.js";
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
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Task4 = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Task4",
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

    // Hook for the filtered data
    const [filteredData, setFilteredData] = useState(CarList);

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Task4);

    return currentNestingLevel ? (
      <div {...attrs}>
        <RouteBar />
        <h1 className={Css.center()}>Autobazar</h1>

        {/* Filter modal which takes props of the data and filtered data */}
        <section className={Css.center()}>
          <FilterModal carlist={CarList} setFilteredData={setFilteredData}></FilterModal>
        </section>

        <section className={Css.section()}>
          <Uu5Elements.Grid templateColumns={{ xl: "repeat(12, 1fr)" }}>
            <Uu5Elements.Grid.Item colSpan={2} />

            {/* Table with data content that has the beginning state at first */}

            <Uu5Elements.Grid.Item colSpan={8}>
              <DynamicLibraryComponent
                uu5Tag={"Uu5TilesElements.Table"}
                data={filteredData}
                columns={[
                  {
                    value: "brand",
                    header: "Brand",
                    cell: (item) => {
                      return item.brand;
                    },
                  },
                ]}
              ></DynamicLibraryComponent>
            </Uu5Elements.Grid.Item>
            <Uu5Elements.Grid.Item colSpan={2} />
          </Uu5Elements.Grid>
        </section>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Task4 };
export default Task4;
//@@viewOff:exports
