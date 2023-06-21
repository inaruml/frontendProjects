//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, PropTypes } from "uu5g05";
import Config from "../config/config.js";

import ShopBox from "./shop-box.js";
import Uu5Elements from "uu5g05-elements";
import Time from "./time.js";
//@@viewOff:imports

//@@viewOn:constants

//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  shoppingMall: () =>
    Config.Css.css({
      textAlign: "center",
      marginBottom: "30px",
      fontSize: "30px",
      padding: "20px",
    }),
  time: () =>
    Config.Css.css({
      textAlign: "center",
      margin: "30px",
      fontSize: "40px",
      padding: "20px",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ShoppingMall = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ShoppingMall",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    name: PropTypes.string,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    {
      /* useState na total count customers komponenty */
    }
    const [customersInMall, setCustomersInMall] = useState(0);

    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, ShoppingMall);

    return currentNestingLevel ? (
      <div {...attrs}>
        {/* Total count customers / Shopping mall komponenta  */}

        <Uu5Elements.Block
          className={Css.shoppingMall()}
          card="full"
          borderRadius="none"
          headerType="title"
          level="1"
          header={props.name}
        >
          <div>{customersInMall}</div>
        </Uu5Elements.Block>

        {/* Time komponenta */}

        <Uu5Elements.Block
          className={Css.time()}
          card="none"
          borderRadius="none"
          headerType="title"
          level="1"
          header="Čas"
        >
          <Time></Time>
        </Uu5Elements.Block>

        {/* Shop komponenty */}

        <ShopBox name="Hračkářství" capacity={20} onChange={(inOneShop) => setCustomersInMall(inOneShop)}></ShopBox>
        <ShopBox name="Salón" capacity={10} onChange={(inOneShop) => setCustomersInMall(inOneShop)}></ShopBox>
        <ShopBox name="Domácí mazlíčci" capacity={5} onChange={(inOneShop) => setCustomersInMall(inOneShop)}></ShopBox>
        <ShopBox name="Drogerie" capacity={15} onChange={(inOneShop) => setCustomersInMall(inOneShop)}></ShopBox>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ShoppingMall };
export default ShoppingMall;
//@@viewOff:exports
