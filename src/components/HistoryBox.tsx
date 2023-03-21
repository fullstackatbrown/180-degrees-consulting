interface HistoryBoxProps {
  history: string[];
}

function HistoryBox(props: HistoryBoxProps) {
  return (
    <div className="repl-history">
      {/* TODO: Add a div for each command in the history */
        props.history.map((content) => <div className="commandOutput">{content}</div>)
      }
      {/* Hint: You can use the map function to iterate over an array */}
      
    </div>
  );
}

export default HistoryBox;
