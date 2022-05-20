let x1=5;
let y1=9;
let x2=9;
let y2=14;

let x = (x2-x1);
let y = (y2-y1);

let xSquare=(x ** 2);
let ySquare=(y ** 2);

let squaresum=(xSquare + ySquare);

let ans=Math.sqrt(squaresum);

console.log("Let's have some fun and calculate the distance between some coordinates.");
console.log("x1 is equal to " + x1);
console.log("y1 is equal to " + y1);
console.log("x2 is equal to " + x2);
console.log("y2 is equal to " + y2);
console.log("We subtract x1 from x2 to get x");
console.log("So, x is equal to " + x);
console.log("We subtract y1 from y2 to get y");
console.log("So, y is equal to " + y);
console.log("We then square both x and y, respectively.");
console.log("X squared is equal to " + xSquare);
console.log("Y squared is equal to " + ySquare);
console.log("We then add the square of x and y.");
console.log("The sum of both x and y squared is " + squaresum);
console.log("We then take the squqre root of " + squaresum);

console.log("So, the distance between our coordinates is " + ans);



