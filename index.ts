/** @format */

const input = document.getElementById("numbers")! as HTMLInputElement;
const btn = document.getElementById("calculate")!;

btn.addEventListener("click", () => {
  console.log(eval(input.value));
});
