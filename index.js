"use strict";
/** @format */
const input = document.getElementById("numbers");
const btn = document.getElementById("calculate");
btn.addEventListener("click", () => {
    console.log(eval(input.value));
});
