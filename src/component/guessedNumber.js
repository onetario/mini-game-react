import React from "react";
function GuessedNumber(props) {
  const { number, term } = props;
  let result;
  console.log(typeof term);
  //   let intTerm = parseInt(term);
  if (term === "") {
    result = "Start Guessing !";
  } else if (term < number) {
    result = "You Guessed lower";
  } else if (term > number) {
    result = "You Guessed higher";
  } else if (term == number) {
    result = "You Guessed Correctly !";
  }

  return (
    <>
      <h3>{result}</h3>
    </>
  );
}

export default GuessedNumber;
