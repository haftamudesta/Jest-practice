const functions = {
  stringLength: (string) => {
    const length = string.split("").length;
    return length;
  },
  reversetring: (str) => str.split("").reverse().join(""),
  add: (num1, num2) => num1 + num2,
  substract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  devide: (num1, num2) => num1 / num2,
  capitalize: (string) => {
    string = string[0].toUpperCase() + string.substring(1);
    return string;
  },
};
module.exports = functions;
