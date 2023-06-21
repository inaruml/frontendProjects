//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, PropTypes } from "uu5g05";
import Config from "../config/config.js";
//@@viewOff:imports
import Uu5Elements from "uu5g05-elements";

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  shopBox: () =>
    Config.Css.css({
      textAlign: "center",
      margin: "20px",
      fontSize: "30px",
      padding: "20px",
    }),
  button: () =>
    Config.Css.css({
      margin: "3px",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ShopBox = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShopBox",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    capacity: PropTypes.number,
    name: PropTypes.string,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;

    {
      /* useState na customer count v kazdem shop */
    }

    const [customerCount, setCustomerCount] = useState(0);
    //@@viewOff:private

    {
      /* Definice času */
    }

    let currentDate = new Date(); // Systemovy kompletni cas
    let currentHours = currentDate.getHours(); // Vezmu z kompletniho casu jen hodnotu hodin

    //@@viewOn:interface

    {
      /* Funkce na handler Add Customer + opening hours of mall */
    }

    function handlerCustomerAdd() {
      if (currentHours < 22 && currentHours >= 6) {
        if (customerCount < props.capacity) {
          setCustomerCount((customerCount) => customerCount + 1);
          props.onChange((customerCount) => customerCount + 1);
        } else {
          alert("Shop is full!");
        }
      } else {
        alert("Shop is closed!");
        customerCount = 0;
      }
    }

    {
      /* Funkce na handler Remove Customer + opening hours of mall */
    }

    function handlerCustomerRemove() {
      if (currentHours < 22 && currentHours >= 6) {
        if (customerCount > 0) {
          setCustomerCount((customerCount) => customerCount - 1);
          props.onChange((customerCount) => customerCount - 1);
        } else {
          alert("Shop is empty!");
        }
      } else {
        alert("Shop is closed!");
        customerCount = 0;
      }
    }

    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ShopBox);

    return currentNestingLevel ? (
      <div {...attrs}>
        {/* Shop komponenta */}

        <Uu5Elements.Block
          className={Css.shopBox()}
          card="full"
          borderRadius="none"
          headerType="title"
          level="1"
          header={props.name}
        >
          <Uu5Elements.Grid templateColumns={{ xl: "repeat(12, 1fr)" }}>
            <Uu5Elements.Grid.Item colSpan={3}></Uu5Elements.Grid.Item>

            <Uu5Elements.Grid.Item colSpan={6}>
              <div>
                {customerCount} / {props.capacity}
              </div>
            </Uu5Elements.Grid.Item>

            <Uu5Elements.Grid.Item colSpan={3}>
              {/* Button minus */}

              <Uu5Elements.Button
                className={Css.button()}
                colorScheme="primary"
                icon="mdi-minus"
                onClick={handlerCustomerRemove}
              >
                1
              </Uu5Elements.Button>

              {/* Button plus */}

              <Uu5Elements.Button
                className={Css.button()}
                colorScheme="primary"
                icon="mdi-plus"
                onClick={handlerCustomerAdd}
              >
                1
              </Uu5Elements.Button>
            </Uu5Elements.Grid.Item>
          </Uu5Elements.Grid>
        </Uu5Elements.Block>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShopBox };
export default ShopBox;
//@@viewOff:exports
