import UuFe from "uu_fe_maing01-hi";
import { testProperties } from "uu5g05-test";

const CONFIG = {
  props: {
    // left: {
    //   values: ["Left as text", <span key="l">Left as JSX</span>, 0],
    // },
  },
  requiredProps: {
    // children: "Children content",
  },
};

describe(`UuFe.Routes.Task4`, () => {
  testProperties(UuFe.Routes.Task4, CONFIG);
});
