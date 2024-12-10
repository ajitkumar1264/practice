import React from "react";
import "./App.css";
import Invoice from "./Component/Invoice";

import Main from "./Component/Main";
import Task01 from "./task/Task01";
import Imghotspot from "./ImageHotspot/Imghotspot";

function App() {
  return (
    <div className="App">
      {/* Inline PDF Viewer */}
      {/* <Main /> */}
      {/* <Task01/> */}
      <Imghotspot/>
    </div>
  );
}

export default App;
