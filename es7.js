const colors = ["red","green","blue"]

const [red,green,blue] = colors

console.log(red);
console.log(green);
console.log(blue);

const product = {
    Item: "COMPUTER 4.0",
    Price: 40000,
    Stock:20
}

const {Item,Price,Stock} = product // can use --> const {product:Item,product:Price,product:Stock} = product 

console.log(Item)
console.log(Price)
console.log(Stock)