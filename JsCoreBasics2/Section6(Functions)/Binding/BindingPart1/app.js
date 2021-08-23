// not related to game

const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

// const subtractUp = function(resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     // don't use that
//     sum -= num;
//   }
//   resultHandler(sum, 'The result after adding all numbers is');
// };

const showResult = (messageText, ms2,  result) => {
  console.log(messageText +" "+ ms2 +" " + result);
};

combine(
  showResult.bind(this, "The result after adding all numbers is:", 'MS2'),
  "ADD",
  1,
  5,
  "fdsa",
  -3,
  6,
  10
);
combine(
  showResult.bind(this, "The result after adding all numbers is:", 'MS2'),
  "ADD",
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combine(
  showResult.bind(this, "The result after subtracting all numbers is:", 'MS2'),
  "SUBTRACT",
  1,
  10,
  15,
  20
);
