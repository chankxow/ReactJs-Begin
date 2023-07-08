//Array Reduce



const data = [10,20,30,40,50,60]
// array.reduce((ค่าที่ถูกประมวลผล,element)=>{},ค่าเริ่มต้น)
// value = 0

const dataReduce = data.reduce((value,element)=>{
    const total = element+value
    return total
},0) 

console.log(`ผลรวมข้อมูลคือ ${dataReduce}`)

//cart

const cart = [
    {name:"gun",price:25000},
    {name:"knife",price:2500},
]

const cartReduce = cart.reduce((value,element)=>element.price+value,0)

console.log(`ผลรวมสินค้าทั้งหมดราคา ${cartReduce}`)