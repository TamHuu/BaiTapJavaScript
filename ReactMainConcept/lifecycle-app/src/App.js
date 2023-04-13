import { useState } from "react";
import "./App.css";
import Clock from "./Clock";
import BareInput from "./BareInput";
import Layout from "./Layout";

function App() {
  // const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {/* <div id="seconds">Component Did Amount</div>

      {visible === false ? (
        <button onClick={() => setVisible(true)}>Show Clock component</button>
      ) : (
        <button onClick={() => setVisible(false)}>Hide Clock component</button>
      )}

      {visible && <Clock />} */}7
      <Layout>
        <h3>This is children</h3>
        <BareInput type="text" value="100" onChange={() => {}} autoFocus />
      </Layout>
    </div>
  );
}

export default App;
