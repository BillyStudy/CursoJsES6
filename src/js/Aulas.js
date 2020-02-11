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

//console.log(filter);

// Desestruturação

const Usuario = {
    nome: 'Gustavo',
    idade: 18,
    endereco: {
        cidade: 'Osasco',
        estado: 'SP'
    }
}

    //rest
const mostraValores = ({nome, ...resto}) => console.log(nome, resto);
//mostraValores(Usuario);


//Rest = pegar o resto das props

function Soma(...nums){
    return nums.reduce((total, next) => total + next);
}

//console.log(Soma(1,2,3,4,5,6));


//[SPREAD]

    const arr1 = [1,3,5];
    const arr2 = [7,11,13];
    const arr3 = [...arr1, ...arr2];
    //console.log (arr3);


// [TEMPLATE LITERALS]

    const nome = 'Gustavo';
    const sobrenome = 'Ferreira'
    console.log(`Meu nome é ${nome} ${sobrenome}`)
