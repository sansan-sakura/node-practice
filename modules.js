console.log(arguments);

console.log(require("module").wrapper);

const C = require("./test-modules");

const calc1 = new C();
console.log(calc1.add(2, 5));

const calc2 = require("./test-modules-2");

console.log(calc2.multiply(2, 6));
