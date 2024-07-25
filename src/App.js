import { useState } from "react";
import "./style.css"
import Weather from "./components/Weather";

function App() {
  const [show, setShow] = useState(true)
  return (
    <div >
      {/* {show? <CleanUpEffect />:"Not show"}
      <button onClick={()=>setShow(!show)}>Show</button> */}
      {/* <API1 /> */}
      {/* <RestAPI /> */}
      <Weather />
    </div>
  );
}

export default App;
