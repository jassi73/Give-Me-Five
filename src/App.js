import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const chars = ["P", "L", "P", "T", "S", "A", "C", "E", "H", "D"];
  const words = ["head", "apple", "space", "help", "place"];
  const [givemestarted, setGivemestared] = useState(false);
  const [enteredword, setEnteredword] = useState("");
  const [correctwords, setCorrectwords] = useState([]);
  function charSelect(char) {
    if (enteredword.length > 4) {
      setEnteredword("");
      return;
    }
    setEnteredword(enteredword + char);
  }
  useEffect(() => {
    if (words.includes(enteredword.toLowerCase())) {
      let arr = correctwords;
      arr.push(enteredword);
      setCorrectwords(arr);
      setEnteredword("");
    }
  }, [enteredword]);
  console.log(enteredword);
  console.log(correctwords);
  return (
    <div className="App">
      <h1>Give Me Five Words</h1>
      <button onClick={() => setGivemestared(true)}> Play </button>
      {givemestarted ? (
        <div class="  ">
          <span>Entered Word{enteredword}</span>
          <div>
            {chars.map((char) => (
              <span onClick={() => charSelect(char)} class="character">
                {char}
              </span>
            ))}
          </div>
          {correctwords.map((item, id) => (
            <div>
              <input value={item} readOnly></input> <span>{item.length}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default App;
