//Loop Array
// for Loop ,ForEach ,ForOf

const data = [10,20,30,40,50,60,70,80,90,100]
let sum = 0
let i = 0
//for loop
for(let i = 0 ;i<data.length;i++){
    console.log(`สมาชิกลำดับที่ ${i} = ${data[i]}`)
}
data.forEach(Element =>{
    console.log(`สมาชิกใน Array Data = ${Element}`)
})
//forEach
data.forEach(Element=>{
    sum+=Element
    console.log(`ผลรวมตัวที่ ${i} = ${sum}`)
})
//forOf
for(const e of data){
    i ++ 
    console.log(`สามาชิกที่ในForOf ${i} = ${e}`)
}