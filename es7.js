//Destructuring


//Arr
const colors = ["red","green","blue"]

const [red,green,blue] = colors

console.log(red);
console.log(green);
console.log(blue);

//Object
const product = {
    Item: "COMPUTER 4.0",
    Price: 40000,
    Stock:20
}

const {Item:n,Price:s,Stock:r} = product // can use --> const {Item,Price,Stock} = product 

console.log(n)
console.log(s)
console.log(r)