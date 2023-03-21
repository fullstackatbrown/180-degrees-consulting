import { useState } from "react";

interface InputBoxProps {
  history: string[];
  setHistory: (data: string[]) => void;
}

export default function InputBox(props: InputBoxProps) {
  const [inputContents, setInputContents] = useState(String);

  /**
   * Handles the submit button being clicked or the enter key being pressed!
   * You may want to make this function more sophisticated to add real
   * command logic, but for now it just adds the text to the history box.
   */
  function handleSubmit() {
    props.setHistory([...props.history,inputContents]);
    setInputContents("");
  }

  return (
    <div className="repl-input">
      {/* TODO: Make this input box sync with the state variable */}
      <input type="text" className="repl-command-box" onChange={(e)=>{setInputContents(e.target.value)}}/>
      {/* TODO: Make this button call handleSubmit when clicked */}
      <button className="repl-button" onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
}
