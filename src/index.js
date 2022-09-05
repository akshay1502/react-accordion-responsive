import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { data } from "./data";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App data={data} closePrevious={false} />
  </StrictMode>
);
