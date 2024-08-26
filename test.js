
const arr = [1,2,3,4,5, 6];

function transfor(a){
    return a;
}

const e = arr.map(function(i){
    return i * i
})

const e1 = arr.map((i) => {
    return i * i
})


console.log(e)

console.log(arr.filter(a => a % 2 == 0))