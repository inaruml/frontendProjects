//@@viewOn:imports
import { createVisualComponent, Utils, Content, PropTypes } from "uu5g05";
import Config from "../config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
  studentTableComponent: () =>
    Config.Css.css({
      border: "2px solid black",
      textAlign: "left",
      padding: "15px",
      marginBottom: "20px",
    }),
  studentTable: () =>
    Config.Css.css({
      textAlign: "left",
      padding: "10px",
      width: "100%",
      borderCollapse: "collapse",
    }),
  studentTableCells: () =>
    Config.Css.css({
      margin: "15px",
      paddingTop: "15px",
      paddingBottom: "15px",
      border: "2px solid black",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const StudentTable = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "StudentTable",
  nestingLevel: ["areaCollection", "area"],
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    students: PropTypes.array,
    name: PropTypes.text,
    surname: PropTypes.text,
    description: PropTypes.text,
    rating: PropTypes.number,
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
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, StudentTable);

    return currentNestingLevel ? (
      <div {...attrs}>
        <h2>{props.nadpis}</h2>
        <div className={Css.studentTableComponent()}>
          <table className={Css.studentTable()}>
            <thead className={Css.studentTableCells()}>
              <tr>
                <th>Jméno</th>
                <th>Bio</th>
                <th>Průběžné hodnocení</th>
              </tr>
            </thead>
            <tbody>
              {props.students.map((student) => (
                <tr>
                  <td className={Css.studentTableCells()}>
                    {student.name} {student.surname}
                  </td>
                  <td className={Css.studentTableCells()}>{student.description}</td>
                  <td className={Css.studentTableCells()}>{student.rating}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { StudentTable };
export default StudentTable;
//@@viewOff:exports
