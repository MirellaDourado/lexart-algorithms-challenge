const operations = {
  addition: (numbersArray) => numbersArray.reduce((acc, curr) => acc += curr),
  subtraction: (numbersArray) => numbersArray.reduce((acc, curr) => acc -= curr),
  multiplication: (numbersArray) => numbersArray.reduce((acc, curr) => acc * curr),
  division: (divider, dividend) => (dividend === 0 ? "Sorry, it's not possible to divide per 0"
  : divider/dividend ),
}