//rest parameter

sumation=(...numberArr)=>{
    let total = 0
    for(let num of numberArr) {
        total += num
    }
    return total

}

console.log(sumation(50,100));
console.log(sumation(50,100,450));