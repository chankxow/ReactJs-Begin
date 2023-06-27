/*ค้นหาข้อมูลใน Array
findOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index  ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
find(ข้อมูล) =>ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
findIndex(ข้อมูล)=>ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
*/

const colors = ['red','green','blue','purple','white']

// findOf()
const index = colors.indexOf('red')
const index1 = colors.indexOf('green')
const index2 = colors.indexOf('blue')

console.log(index)
console.log(index1)
console.log(index2)

// find()
const search = colors.find(e => e === 'red')
console.log(search)

//findIndex
const searchIndex = colors.findIndex(e => e === 'red')
console.log(searchIndex)