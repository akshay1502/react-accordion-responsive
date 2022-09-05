import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App({ data, closePrevious = false }) {
  const AccordionArray = new Array(data.length).fill(false);
  const [state, setState] = useState(AccordionArray);
  const [trigger, setTrigger] = useState({
    latch: true,
    changedIndex: null
  });
  const previousAccordion = useRef(null);
  useEffect(() => {
    const temp = [...state];
    temp[trigger.changedIndex] = !temp[trigger.changedIndex];
    if (closePrevious) {
      if ( previousAccordion.current !== null && previousAccordion.current !== trigger.changedIndex) {
        temp[previousAccordion.current] = !temp[previousAccordion.current];
      }
      previousAccordion.current =
        previousAccordion.current === trigger.changedIndex
          ? null
          : trigger.changedIndex;
    }
    setState(temp);
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
      <div className="acc_header" role="button" onClick={updateState}>
        <span className="acc_title">{data.title}</span>
        <button className="acc_btn">
          {accordionState ? "-" : "+"}
        </button>
      </div>
      <p className="acc_context">{accordionState && data.context}</p>
    </div>
  );
}
