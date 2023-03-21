import { useState } from "react";
import "../styles/App.css";
import Header from "./components/Header";
import HistoryBox from "./components/HistoryBox";
import InputBox from "./components/InputBox"

function App() {
  const [history, setHistory] = useState<string[]>([]);

  return (
    <div>
      <Header />
      <div className="repl">
        <HistoryBox history={history}/>
        <hr />
        <InputBox history={history} setHistory={setHistory}/>
      </div>
    </div>
  );
}

export default App;
