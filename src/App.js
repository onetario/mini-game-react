import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import GuessedNumber from "./component/guessedNumber";
function App() {
  const [term, setTerm] = useState("");
  const handelGuess = (e) => {
    setTerm(e.target.value);
  };
  const number = Math.floor(Math.random() * 10) + 1;
  return (
    <>
      <h1>Mini Game</h1>
      <div className="container">
        <label className="head" htmlFor="term">
          Guess the number between 1 to 10 !
        </label>
        <input id="term" type="number" onChange={handelGuess} />
        <GuessedNumber number={number} term={term} />
      </div>
    </>
  );
}

export default App;
