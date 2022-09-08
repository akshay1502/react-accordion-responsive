import { StrictMode } from "react";
import ReactDOM from 'react-dom';
import Accordion from "easy-react-accordion";
import { data } from "./data";

ReactDOM.render(
  <StrictMode>
    <Accordion data={data} closePrevious={false} />
  </StrictMode>,
  document.getElementById('root')
);