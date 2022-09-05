import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Accordion from "./accordion";
import { data } from "./data";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Accordion data={data} closePrevious={false} />
  </StrictMode>
);
