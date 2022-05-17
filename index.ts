type Fn = (...args: any[]) => any;

// Pure Function
const duplicate = (str: string, num: number): string => {
  return num < 1 ? "" : str + duplicate(str, num - 1);
};

// Higher Order Function
const withLog =
  <T extends Fn>(fn: T) =>
  (...arg: Parameters<typeof fn>): ReturnType<typeof fn> => {
    console.log(fn.name);
    return fn(...arg);
  };

//Currying
const add = (a: number) => (b: number) => {
  return a + b;
};

// Composition
const range = (from: number, to: number): number[] =>
  from > to ? [] : [from, ...range(from + 1, to)];

const multiply = (...args: number[]) => args.reduce((acc, cur) => acc * cur);

const factorial = (num: number) => multiply(...range(1, num));
