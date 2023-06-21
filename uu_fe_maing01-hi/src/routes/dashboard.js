//@@viewOn:imports
import { createVisualComponent, Utils, Content, DynamicLibraryComponent, useState } from "uu5g05";

import Config from "./config/config.js";

//@@viewOff:imports
import BarChart from "../bricks/task3/bar-chart.js";
import RouteBar from "../core/route-bar.js";
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
  barchart: () =>
    Config.Css.css({
      padding: "50px",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Dashboard = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Dashboard",
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
      /* State hook that lets us keep track of the selected year from input */
    }

    {
      /* Default state is 1 */
    }

    const [selectedYear, setSelectedYear] = useState(1);

    {
      /* Our data for the bar graph */
    }

    let Task3Data = [
      { label: "2022", population: 10525.7, birth: 50011, death: 59661 },
      { label: "2021", population: 10515.7, birth: 111793, death: 139891 },
      { label: "2020", population: 10701.8, birth: 110200, death: 129289 },
      { label: "2019", population: 10693.9, birth: 112231, death: 112362 },
      { label: "2018", population: 10649.8, birth: 114036, death: 112920 },
    ];

    {
      /* Our series name our values from data */
    }

    let Task3Series = [
      {
        valueKey: "population",
        name: "Population x1000",
        colorSchema: "blue-rich",
      },
      {
        valueKey: "birth",
        name: "Birth",
        colorSchema: "indigo-rich",
      },
      {
        valueKey: "death",
        name: "Death",
        colorSchema: "pink-rich",
      },
    ];

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Dashboard);

    return currentNestingLevel ? (
      <div {...attrs}>
        <RouteBar />
        <h1 className={Css.center()}>Domácí úkol 3</h1>
        <section className={Css.section()}>
          {/* Dynamic library component importing form select */}
          {/* onChange changes the state to our input value  */}
          <DynamicLibraryComponent
            uu5Tag={"Uu5Forms.FormSelect"}
            onChange={(e) => setSelectedYear(e.data.value)}
            initialValue={selectedYear}
            label="Select number of years to display"
            itemList={[
              { value: 1, children: "1 year" },
              { value: 2, children: "2 years" },
              { value: 3, children: "3 years" },
              { value: 4, children: "4 years" },
              { value: 5, children: "5 years" },
            ]}
          ></DynamicLibraryComponent>
        </section>

        <section className={Css.section()}>
          {/* Since method map takes only arrays, we need to push our data objects into an array first, 
          then we can map through it. 
          We also keep track of the number of iterations with index, which decides how many graphs to show based on 
          the input. */}

          {Task3Data.length &&
            Task3Data.map((currentTask3DataObject, index) => {
              let currentTask3DataArray = [];

              currentTask3DataArray.push(currentTask3DataObject);

              if (index < selectedYear) {
                return (
                  <BarChart
                    className={Css.barchart()}
                    key={index}
                    currentTask3Data={currentTask3DataArray}
                    Task3Series={Task3Series}
                  ></BarChart>
                );
              }
            })}
        </section>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Dashboard };
export default Dashboard;
//@@viewOff:exports
