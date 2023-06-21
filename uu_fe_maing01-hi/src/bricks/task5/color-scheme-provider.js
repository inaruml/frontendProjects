//@@viewOn:imports
import { createComponent, useMemo, useState } from "uu5g05";

import Uu5Elements from "uu5g05-elements";

import Config from "../config/config";

import ColorSchemeContext from "./color-scheme-context";

//@@viewOff:imports

export const ColorSchemeProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ColorSchemeProvider",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private

    // Stav na urceni colorschematu pres definici pres props
    const [colorScheme, setColorScheme] = useState(props.colorSchemeList[0]);

    // Funkce ktera obsahuje komponentu dropdown na urceni colorschematu
    function colorSchemeSelector() {
      return (
        <Uu5Elements.Dropdown
          label={colorScheme}
          itemList={props.colorSchemeList.map((item) => {
            return { children: item, onClick: () => setColorScheme(item) };
          })}
        ></Uu5Elements.Dropdown>
      );
    }

    // Provider samotny se stavem a selectorem
    const providerValue = useMemo(() => {
      return {
        colorScheme,
        colorSchemeSelector,
      };
    }, [colorScheme]);
    //@@viewOff:private

    //@@viewOn:render

    // Vracim provider
    return <ColorSchemeContext.Provider value={providerValue}>{props.children}</ColorSchemeContext.Provider>;
    //@@viewOff:render
  },
});

export default ColorSchemeProvider;
