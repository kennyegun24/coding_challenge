const readline = require("readline");

// QUESTION 1
function findPairs(target) {
  // INITIALIZE AN EMPTY ARRAY TO STORE ALL PAIRS
  const multiplyingPairs = [];

  // LOOP THROUGH THE PARAMETER PASSED AND PUSH ALL PAIRS TO THE INITIALIZED EMPTY ARRAY
  for (let factor1 = 1; factor1 <= Math.sqrt(target); factor1++) {
    if (target % factor1 === 0) {
      const factor2 = target / factor1;
      if (factor1 <= factor2) {
        multiplyingPairs.push([factor1, factor2]);
      }
    }
  }

  return multiplyingPairs;
}

function printMultiplyingPairs(target) {
  const multiplyingPairs = findPairs(target);

  // PRINT OUT OUTPUT TO THE CONSOLE
  for (const pair of multiplyingPairs) {
    console.log(`${pair[0]} * ${pair[1]} = ${target}`);
  }
}

// CALL FUNCTION AND PASS ARGUEMENT TO IT
const target = 900900;
console.log(printMultiplyingPairs(target));

// QUESTION 2
function getDivisorsSum(n) {
  // INITIALIZE A VARIABLE TO HOLD THE SUM THAT WILL BE USED TO DETECT IF NUMBER MEETS THE REQ.
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  return sum;
}

function classifyNumber(n) {
  const sumOfDivisors = getDivisorsSum(n);
  if (sumOfDivisors < n) {
    return "Deficient";
  } else if (sumOfDivisors === n) {
    return "Perfect";
  } else {
    return "Abundant";
  }
}

readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter an integer: ", (input) => {
  // TAKE USERS INPUTS
  const number = parseInt(input);
  if (!isNaN(number)) {
    const classification = classifyNumber(number);
    console.log(`The number ${number} is ${classification}.`);
  } else {
    console.log("Invalid input. Please enter a valid integer.");
  }
  readline.close();
});

// QUESTION 3

function isHarshadNumber(n) {
  // CHECK TO SEE IF NUMBER IS HARSHAD BY USING REDUCE FUNC TO GET THE TOTAL SUM OF NUMBERS IN THE ARRAY CALLED DIGITS
  // RETURN NUMBERS WHOSE REMAINDER WHEN DIVIDED BY THE SUM IS EQUAL TO ZERO
  const digits = Array.from(String(n), Number);
  const sumOfDigits = digits.reduce((acc, digit) => acc + digit, 0);
  return n % sumOfDigits === 0;
}

// INITIALIZE AND TAKE USER INPUT
readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter an integer: ", (input) => {
  const number = parseInt(input);
  if (!isNaN(number)) {
    if (isHarshadNumber(number)) {
      console.log(`The number ${number} is a Harshad number.`);
    } else {
      console.log(`The number ${number} is not a Harshad number.`);
    }
  } else {
    console.log("Invalid input. Please enter a valid integer.");
  }
  readline.close();
});

// QUESTION 4 THIS DOES NOT REALLY MEET THE REQUIREMENT THO
function combinations() {
  const rings = ["agate", "diamond", "diamond", "citrine"];
  const diffCombinations = [];

  for (let j = 0; j <= 365; j++) {
    for (let i = 0; i < rings.length; i++) {
      for (let j = 0; j < rings.length; j++) {
        for (let k = 0; k < rings.length; k++) {
          for (let l = 0; l < rings.length; l++) {
            if (
              i !== j &&
              i !== k &&
              i !== l &&
              j !== k &&
              j !== l &&
              k !== l
            ) {
              const combination = [rings[i], rings[j], rings[k], rings[l]];
              diffCombinations.push(combination);
            }
          }
        }
      }
    }
  }
  return diffCombinations;
}

const allCombinations = combinations();

if (allCombinations.length < 365) {
  console.log("There are not enough unique combinations for 365 days.");
} else {
  console.log(`Number of total combinations: ${allCombinations.length}`);
  console.log("365 possible combinations for Alice:");

  for (let i = 0; i < 365; i++) {
    console.log(`Combination ${i + 1}: ${allCombinations[i].join(", ")}`);
  }
}

// QUESTION 5
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Enter the amount of sirup in your glass (in ml): ",
  (sirupAmount) => {
    rl.question(
      "Enter the current dilution percentage: ",
      (currentDilution) => {
        rl.question(
          "Enter the recommended dilution percentage: ",
          (recommendedDilution) => {
            sirupAmount = parseFloat(sirupAmount);
            currentDilution = parseFloat(currentDilution);
            recommendedDilution = parseFloat(recommendedDilution);

            if (
              isNaN(sirupAmount) ||
              isNaN(currentDilution) ||
              isNaN(recommendedDilution)
            ) {
              console.log("Please enter valid numeric values.");
              rl.close();
            } else {
              const sirupToReplace =
                (sirupAmount * (currentDilution - recommendedDilution)) /
                recommendedDilution;

              if (sirupToReplace > 0) {
                console.log(
                  `Replace ${sirupToReplace.toFixed(
                    2
                  )} ml of your sirup with water.`
                );
              } else if (sirupToReplace < 0) {
                console.log(
                  `Add ${Math.abs(sirupToReplace).toFixed(
                    2
                  )} ml of sirup to achieve the recommended dilution.`
                );
              } else {
                console.log(
                  "Your dilution is already at the recommended level."
                );
              }

              rl.close();
            }
          }
        );
      }
    );
  }
);
