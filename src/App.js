import { useState } from "react";
import UseEffectHook from "./components/UseEffectHook";
import API1 from "./components/API1";
import CleanUpEffect from "./components/CleanUpEffect";
import "./style.css"
import RestAPI from "./components/RestAPI";

function App() {
  const [show, setShow] = useState(true)
  return (
    <div >
      {/* {show? <CleanUpEffect />:"Not show"}
      <button onClick={()=>setShow(!show)}>Show</button> */}
      {/* <API1 /> */}
      <RestAPI />
    </div>
  );
}

export default App;
