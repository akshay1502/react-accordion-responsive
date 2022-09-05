import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App({ data, firstTabActive = false }) {
  const AccordionArray = new Array(data.length).fill(false);
  AccordionArray[0] = firstTabActive;
  const [state, setState] = useState(AccordionArray);
  const [trigger, setTrigger] = useState({
    latch: true,
    changedIndex: null
  });
  const previousAccordion = useRef(firstTabActive ? 0 : null);
  console.log(previousAccordion.current);
  useEffect(() => {
    const temp = [...state];
    temp[trigger.changedIndex] = !temp[trigger.changedIndex];
    if (
      previousAccordion.current !== null &&
      previousAccordion.current !== trigger.changedIndex
    ) {
      temp[previousAccordion.current] = !temp[previousAccordion.current];
    }
    setState(temp);
    previousAccordion.current =
      previousAccordion.current === trigger.changedIndex
        ? null
        : trigger.changedIndex;
  }, [trigger]);
  return (
    <div className="Accordion_container">
      {data.map((data, index) => {
        return (
          <Accordion
            key={data.id}
            data={data}
            accordionState={state[index]}
            setTrigger={setTrigger}
            index={index}
          />
        );
      })}
    </div>
  );
}

function Accordion({ data, accordionState, setTrigger, index }) {
  const updateState = () => {
    setTrigger({
      latch: Date.now(),
      changedIndex: index
    });
  };
  return (
    <div className="Accordion">
      <div className="acc_header">
        <span className="acc_title">{data.title}</span>
        <button className="acc_btn" onClick={updateState}>
          {accordionState ? "-" : "+"}
        </button>
      </div>
      <p className="acc_context">{accordionState && data.context}</p>
    </div>
  );
}
