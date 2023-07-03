const number = [10,20,30,40]

const result = number.map(e=>{
    const a = e*2
    return a
})

// [ 10,20,30,40]
// [10*2,20*2,30*2,40*2]
// [20,40,60,80]

console.log(`Array number = ${number}`) //เดิม
console.log(`Array map result = ${result}`)//ใหม่

