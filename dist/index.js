"use strict";
// Pure Function
const duplicate = (str, num) => {
    return num < 1 ? "" : str + duplicate(str, num - 1);
};
// Higher Order Function
const withLog = (fn) => (...arg) => {
    console.log(fn.name);
    return fn(...arg);
};
//Currying
const add = (a) => (b) => {
    return a + b;
};
// Composition
const range = (from, to) => from > to ? [] : [from, ...range(from + 1, to)];
const multiply = (...args) => args.reduce((acc, cur) => acc * cur);
const factorial = (num) => multiply(...range(1, num));
