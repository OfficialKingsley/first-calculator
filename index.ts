/** @format */

const input = document.getElementById("input")! as HTMLInputElement;
const btn = document.getElementById("calculate")!;
const numbers = document.querySelectorAll(".number")!;
const operators = document.querySelectorAll(".operator")!;
const outputEl = document.querySelector("output")! as HTMLOutputElement;
const del = document.getElementById("delete")!;
const clear = document.querySelector("#clear");

//Variable variables
let answer: number | string;
let calculated: boolean;

//Assignments
answer = 0;
calculated = false;

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (calculated) {
      input.value = "";
      outputEl.innerHTML = "";
      calculated = false;
    }
    const numberVal = number.innerHTML;
    input.value += numberVal;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    if (calculated) {
      calculated = false;
      input.value = answer.toString();
    }
    if (operator.innerHTML === "X") {
      input.value += "*";
    } else {
      const operatorVal = operator.innerHTML;
      input.value += operatorVal;
    }
  });
});

btn.addEventListener("click", () => {
  if (input.value.includes("(")) {
    const inputArr = Array.from(input.value.split(""));
    const bracketIndex = inputArr.indexOf("(");
    let itemBeforeBracket = inputArr.find(
      (item) => inputArr.indexOf(item) === 0
    );
    inputArr.forEach((item) => {
      console.log(typeof inputArr.indexOf(item));
    });
    if (
      itemBeforeBracket === "+" ||
      itemBeforeBracket === "-" ||
      itemBeforeBracket === "*" ||
      itemBeforeBracket === "/" ||
      itemBeforeBracket === "("
    ) {
    } else {
      const newItemBeforeBracket = itemBeforeBracket + "*";
      console.log(newItemBeforeBracket);
      inputArr[bracketIndex - 1] = newItemBeforeBracket;
      const newValue = inputArr.join("");
      input.value = newValue;
    }
  }
  if (input.value.includes("/0")) {
    answer = "You cannot divide by zero";
    outputEl.innerHTML = answer.toString();
    calculated = true;
  } else {
    answer = eval(input.value);

    outputEl.innerHTML = answer.toString();
    calculated = true;
  }
});

del.addEventListener("click", () => {
  const inputArray = input.value.split("");
  console.log(inputArray);
  inputArray.pop();
  input.value = inputArray.join("");
});

clear?.addEventListener("click", () => {
  input.value = "";
  outputEl.innerHTML = "";
});
