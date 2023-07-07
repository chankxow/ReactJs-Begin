//Array filter

const data = [10,20,30,40]

const result = data.filter(element =>{
    return element>=20
})

console.log(result)

const dataMember = [
    {name:"Bang",salary:26000,department:"DevOps"},
    {name:"Senith",salary:25800,department:"Tester"},
    {name:"Ruser",salary:35600,department:"Design"},
    {name:"Ester",salary:48500,department:"ProjectManager"}
]

const resultDataMember = dataMember.filter(element=>{
    return element.salary>30000
})

console.log(resultDataMember)



