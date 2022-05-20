let a = 7
let b = 20
let c = 10

let b2 = (b ** 2);
let inside1 = (4*a*c);
let divisor = 2 * 7;
let inside = (b2 - inside1);
let sr = Math.sqrt(inside);
let dividendPos = -b + sr;
let dividendNeg = -b - sr;
let x1 = dividendPos / divisor;
let x2 = dividendNeg / divisor;


console.log("This is a = " + a);
console.log("This is b = " + b);
console.log("This is c = " + c);
console.log("This is our dividend for x1 " + dividendPos);
console.log("This is our dividend for x2 " + dividendNeg);
console.log("This is our divisor =" + divisor);
console.log("This is our square root = " + sr);

console.log("So, x1 is = " + x1);
console.log("And x2 is = " + x2);