const arr = [1,3,5, 7,11];

const newArr = arr.map(function(item){
    return item * 10;
})

const sum = arr.reduce(function(total, next){
    return total + next;
})

const filter = arr.filter(function(item){
    return item % 2 === 0
})

const find = arr.find(function(item){
    return item === 11
})

console.log(find);
