//@@viewOn:imports
import { createVisualComponent, Utils, Content, useMemo, useRef, useState, DynamicLibraryComponent } from "uu5g05";
import Config from "./config/config.js";
//@@viewOff:imports
import Uu5Elements from "uu5g05-elements";
import Uu5Forms from "uu5g05-forms";

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  filterButton: () =>
    Config.Css.css({
      margin: "30px",
      marginLeft: "0px",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const FilterModal = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "FilterModal",
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

    // Handler for filter modal

    function handlerFilter() {
      props.setFilteredData(filteredList);
      setOpen(false);
    }

    // Hook for modal
    const [open, setOpen] = useState();

    // Setting up the arrays of things we want to filter
    const [filter, setFilter] = useState({
      brandList: [],
      modelList: [],
      fuelList: [],
      kmFrom: null,
      kmTo: null,
      priceFrom: null,
      priceTo: null,
    });

    const brandList = useRef(["Škoda", "BMW", "Volkswagen", "Mercedes"]);
    const modelList = useRef([]);
    const fuelList = useRef([]);

    // Logic of dynamic select that brings out the filteredList

    const filteredList = useMemo(() => {
      // const brandMap = {};
      // brandList.current = [];

      const modelMap = {};
      modelList.current = [];

      const fuelMap = {};
      fuelList.current = [];

      const result = [];

      // Conditions that change with filter use
      // Mapping

      props.carlist.forEach((car) => {
        if (checkItem(car)) {
          result.push(car);

          // if (!brandMap[car.brand]) {
          //   brandMap[car.brand] = true;
          //   brandList.current.push(car.brand);
          // }

          if (!modelMap[car.model]) {
            modelMap[car.model] = true;
            modelList.current.push(car.model);
          }

          if (!fuelMap[car.fuel]) {
            fuelMap[car.fuel] = true;
            fuelList.current.push(car.fuel);
          }
        }
      });
      return result;
    }, [filter]);

    // Function for filtering without dynamic select
    // Main logic of filter
    function checkItem(car) {
      if (filter.brandList.length && !filter.brandList.includes(car.brand)) return false;
      if (filter.modelList.length && !filter.modelList.includes(car.model)) return false;
      if (filter.fuelList.length && !filter.fuelList.includes(car.fuel)) return false;
      if (filter.kmFrom && filter.kmFrom > car.km) return false;
      if (filter.kmTo && filter.kmTo < car.km) return false;
      if (filter.priceFrom && filter.priceFrom > car.price) return false;
      if (filter.priceTo && filter.priceTo < car.price) return false;
      return true;
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, FilterModal);

    return currentNestingLevel ? (
      <div {...attrs}>
        {/* Filter button to open modal */}

        <Uu5Elements.Button onClick={() => setOpen(true)} icon="mdi-filter">
          Filter
        </Uu5Elements.Button>

        {/*  Modal window */}

        <Uu5Elements.Modal header="Filter cars" {...props} open={open} onClose={() => setOpen(false)}>
          <Uu5Elements.Grid templateColumns={{ xl: "repeat(12, 1fr)" }}>
            <Uu5Elements.Grid.Item>
              {/* Select Brand Form */}

              <Uu5Forms.Select
                label="Brand"
                itemList={brandList.current.map((item) => {
                  return {
                    value: item,
                  };
                })}
                multiple={true}
                value={filter.brandList}
                onChange={(e) =>
                  setFilter((currentValue) => {
                    const newValue = { ...currentValue };
                    newValue.brandList = e.data.value || [];
                    return newValue;
                  })
                }
              />

              {/* Select Model Form */}

              <Uu5Forms.Select
                label="Model"
                itemList={modelList.current.map((item) => {
                  return {
                    value: item,
                  };
                })}
                multiple={true}
                value={filter.modelList}
                onChange={(e) =>
                  setFilter((currentValue) => {
                    const newValue = { ...currentValue };
                    newValue.modelList = e.data.value || [];
                    return newValue;
                  })
                }
              />

              {/* Radio buttons for fuel */}

              <Uu5Forms.Radios
                label="Fuel"
                itemList={fuelList.current.map((item) => {
                  return {
                    value: item,
                  };
                })}
                value={filter.fuelList}
                onChange={(e) =>
                  setFilter((currentValue) => {
                    const newValue = { ...currentValue };
                    newValue.fuelList = e.data.value || [];
                    return newValue;
                  })
                }
              />
            </Uu5Elements.Grid.Item>

            {/* Km From */}

            <Uu5Elements.Grid.Item>
              <Uu5Forms.Number
                label="Km From"
                min={0}
                value={filter.kmFrom}
                onChange={(e) =>
                  setFilter((currentValue) => {
                    const newValue = { ...currentValue };

                    if (e.data.value < 0) {
                      newValue.kmFrom = 0;
                      return newValue;
                    }
                    newValue.kmFrom = e.data.value;
                    return newValue;
                  })
                }
              />
            </Uu5Elements.Grid.Item>

            {/* Km To*/}

            <Uu5Elements.Grid.Item>
              <Uu5Forms.Number
                label="Km To"
                min={0}
                value={filter.kmTo}
                onChange={(e) =>
                  setFilter((currentValue) => {
                    const newValue = { ...currentValue };

                    if (e.data.value < 0) {
                      newValue.kmTo = 0;
                      return newValue;
                    }

                    newValue.kmTo = e.data.value;
                    return newValue;
                  })
                }
              />
            </Uu5Elements.Grid.Item>

            {/* Price From */}

            <Uu5Elements.Grid.Item>
              <Uu5Forms.Number
                label="Price From"
                min={0}
                value={filter.priceFrom}
                onChange={(e) =>
                  setFilter((currentValue) => {
                    const newValue = { ...currentValue };

                    if (e.data.value < 0) {
                      newValue.priceFrom = 0;
                      return newValue;
                    }
                    newValue.priceFrom = e.data.value;
                    return newValue;
                  })
                }
              />
            </Uu5Elements.Grid.Item>

            {/* Price To*/}

            <Uu5Elements.Grid.Item>
              <Uu5Forms.Number
                label="Price To"
                min={0}
                value={filter.priceTo}
                onChange={(e) =>
                  setFilter((currentValue) => {
                    const newValue = { ...currentValue };

                    if (e.data.value < 0) {
                      newValue.priceTo = 0;
                      return newValue;
                    }

                    newValue.priceTo = e.data.value;
                    return newValue;
                  })
                }
              />
            </Uu5Elements.Grid.Item>
          </Uu5Elements.Grid>

          {/* Filter button that runs the filter handler */}
          <Uu5Elements.Button onClick={handlerFilter} className={Css.filterButton()}>
            Filter
          </Uu5Elements.Button>
        </Uu5Elements.Modal>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { FilterModal };
export default FilterModal;
//@@viewOff:exports
