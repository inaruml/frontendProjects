//@@viewOn:imports
import { createVisualComponent, Utils, Content, PropTypes } from "uu5g05";
import Config from "../config/config.js";
import Uu5Elements from "uu5g05-elements";
//@@viewOff:imports

import ProfileImage from "../../assets/fotka_ina.jpg";
//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  lector: () =>
    Config.Css.css({
      border: "2px solid black",
      marginBottom: "20px",
      padding: "15px",
    }),
  profileImage: () =>
    Config.Css.css({
      width: "100%",
      height: "auto",
    }),
  contactButton: () =>
    Config.Css.css({
      float: "right",
    }),
  textAlign: () =>
    Config.Css.css({
      textAlign: "justify",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const LectorCard = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "LectorCard",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    name: PropTypes.text,
    description: PropTypes.text,
  },
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
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, LectorCard);

    return currentNestingLevel ? (
      <div {...attrs}>
        {props.children}
        <div className={Css.lector()}>
          <Uu5Elements.Grid templateColumns={{ xl: "repeat(12, 1fr)" }}>
            <Uu5Elements.Grid.Item colSpan={5}>
              <img src={ProfileImage} className={Css.profileImage()} alt="profile" />
            </Uu5Elements.Grid.Item>

            <Uu5Elements.Grid.Item colSpan={7}>
              <h2>Lektor {props.name}</h2>
              <p className={Css.textAlign()}>{props.description}</p>

              <Uu5Elements.Button
                onClick={props.handlerContactButton}
                className={Css.contactButton()}
                colorScheme="primary"
              >
                Kontaktovat
              </Uu5Elements.Button>
            </Uu5Elements.Grid.Item>
          </Uu5Elements.Grid>
        </div>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { LectorCard };
export default LectorCard;
//@@viewOff:exports
