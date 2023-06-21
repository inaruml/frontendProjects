import { Utils } from "uu5g05";

// Context je stav, ktery nahradi propsy, abych se neupropsovala a nezatezovala aplikaci
export const [colorSchemeContext, useColorScheme] = Utils.Context.create();

export default colorSchemeContext;
