/*ค้นหาข้อมูลใน Array
findOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index  ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
find(ข้อมูล) =>ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
findIndex(ข้อมูล)=>ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
*/

const colors = ['red','green','blue','purple','white']
const index = colors.indexOf('red')
console.log(index)