//@@viewOn:imports
import { createVisualComponent, Utils, Content } from "uu5g05";
import Config from "../config/config.js";
import Uu5Elements from "uu5g05-elements";
// RouteBar component is on every route
import RouteBar from "../core/route-bar.js";
// My components
import InfoDiv from "../bricks/task1/info-div.js";
import LectorCard from "../bricks/task1/lector-card.js";
import Evaluation from "../bricks/task1/evaluation.js";
import StudentTable from "../bricks/task1/student-table.js";
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
      marginTop: "30px",
      paddingLeft: "40px",
      paddingRight: "40px",
    }),
  container: () =>
    Config.Css.css({
      marginBottom: "30px",
    }),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Task1 = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Task1",
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
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    // Simulace dat studentů do tabulky
    let students = [
      {
        name: "Petr",
        surname: "Novotný",
        description: "Nadějný programátor z Prahy",
        rating: 98,
      },
      {
        name: "Tadeáš",
        surname: "Petrželka",
        description: "Nadějný designer z Kolína",
        rating: 78,
      },
      {
        name: "Daniela",
        surname: "Slepičková",
        description: "Šikovná programátorka z Prahy",
        rating: 99,
      },
    ];

    // Handler na tlačítko Kontaktovat
    const handlerContactButton = async () => {
      alert("Kontakt tlačítko funguje 😄");
    };

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, Task1);

    return currentNestingLevel ? (
      <div {...attrs} className={Css.container()}>
        <RouteBar />

        <h1 className={Css.center()}>Domácí úkol 1</h1>

        {/* Informační divy */}

        <section className={Css.section()}>
          <Uu5Elements.Grid templateColumns={{ xl: "repeat(12, 1fr)" }}>
            <Uu5Elements.Grid.Item colSpan={3}>
              <InfoDiv name="Počet dnů hatchery" value="45" unit=""></InfoDiv>
            </Uu5Elements.Grid.Item>

            <Uu5Elements.Grid.Item colSpan={3}>
              <InfoDiv name="Počet účastníků" value="15" unit=""></InfoDiv>
            </Uu5Elements.Grid.Item>

            <Uu5Elements.Grid.Item colSpan={3}>
              <InfoDiv name="Počet lektorů" value="10" unit=""></InfoDiv>
            </Uu5Elements.Grid.Item>

            <Uu5Elements.Grid.Item colSpan={3}>
              <InfoDiv name="Hodnocení" value="94" unit="%"></InfoDiv>
            </Uu5Elements.Grid.Item>
          </Uu5Elements.Grid>
        </section>

        {/* Lektor a průběžné hodnocení */}

        <section className={Css.section()}>
          <Uu5Elements.Grid templateColumns={{ xl: "repeat(12, 1fr)" }}>
            <Uu5Elements.Grid.Item colSpan={6}>
              <LectorCard
                handlerContactButton={handlerContactButton}
                name="Ina"
                description="Ea ut qui occaecat fugiat sunt. Nostrud eiusmod est in est dolore laboris aute id dolor. Velit proident reprehenderit aliqua deserunt dolore cillum nisi ad elit laboris deserunt. Consectetur velit adipisicing eiusmod incididunt esse aute est cupidatat eu amet cupidatat ut incididunt labore.
                Ea ut qui occaecat fugiat sunt. Nostrud eiusmod est in est dolore laboris aute id dolor. Velit proident reprehenderit aliqua deserunt dolore cillum nisi ad elit laboris deserunt. Consectetur velit adipisicing eiusmod incididunt esse aute est cupidatat eu amet cupidatat ut incididunt labore."
              >
                <h2>Dnešní lektor</h2>
              </LectorCard>
            </Uu5Elements.Grid.Item>

            <Uu5Elements.Grid.Item colSpan={6}>
              <Evaluation>
                <h2>Průběžné hodnocení dle témat</h2>
              </Evaluation>
            </Uu5Elements.Grid.Item>
          </Uu5Elements.Grid>
        </section>

        {/* Tabulka */}

        <section className={Css.section()}>
          <Uu5Elements.Grid templateColumns={{ xl: "repeat(12, 1fr)" }}>
            <Uu5Elements.Grid.Item colSpan={12}>
              <StudentTable nadpis={"Studenti"} students={students}></StudentTable>
            </Uu5Elements.Grid.Item>
          </Uu5Elements.Grid>
        </section>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Task1 };
export default Task1;
//@@viewOff:exports
