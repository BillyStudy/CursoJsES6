const arr = [1,3,5, 7,11];

//ArrowFunction: menor verbosidade de código
const newArr = arr.map(item => item * 10);

const sum = arr.reduce(function(total, next){
    return total + next;
})

const filter = arr.filter(item => item % 2 === 0)

const find = arr.find(function(item){
    return item === 11
})

console.log(filter);
