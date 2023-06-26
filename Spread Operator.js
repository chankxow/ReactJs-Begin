//spread operator
// การกระจายข้อมูลอารเรย์
const newArray = [100,200,300]
const data = [10,20,...newArray]

console.log(data)


const colors = ['red','blue','green']
const allColors = ['yellow','black',...colors]
const newColors = ['grey','pink']

allColors.push(...newColors)
console.log(allColors)
