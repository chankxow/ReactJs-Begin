//push , pop , shift , unshift

//push 
const data = [100,200,600]

data.push(650)

data.push(...[2005,6005]) //ถ้าไม่ใส่Spread operator จะเป็นสมาชิกอาเรย์
console.log(data)

//pop ดึงข้อมูลอาเรย์ตัวสุดท้ายออก

data.pop()
data.pop()
console.log(data)

//shift ดึงข้อมูลอาเรย์ตัวด้านหน้า

data.shift()
console.log(data)

//unshift กำหนดตัวใหม่ขึ้นข้างหน้าในอาเรย์

data.unshift(5462)
console.log(data)