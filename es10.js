//push , pop , shift , unshift

//push 
const data = [100,200,600]

data.push(650)

data.push(...[2005,6005]) //ถ้าไม่ใส่Spread operator จะเป็นสมาชิกอาเรย์
console.log(data)

//pop ดึงข้อมูลตัวสุดท้ายออก

data.pop()
data.pop()
console.log(data)