//splice & slice
// Splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ,สมาชิกตัวที่จะแทรกเข้าไปแทน)
// slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย-1)


const data = [10,20,30,40,50]
//ต้องการลบ       20 30 40
console.log(data)

data.splice(1,3,58) // splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ,สมาชิกตัวที่จะแทรกเข้าไปแทน)
console.log(data)

const LastData = data.slice(0,2)// slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย-1)
console.log(LastData)