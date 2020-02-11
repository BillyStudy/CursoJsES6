"use strict";

var arr = [1, 3, 5, 7, 11]; //ArrowFunction: menor verbosidade de código

var newArr = arr.map(function (item) {
  return item * 10;
});
var sum = arr.reduce(function (total, next) {
  return total + next;
});
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
var find = arr.find(function (item) {
  return item === 11;
});
console.log(filter); // Desestruturação

var Usuario = {
  nome: 'Gustavo',
  idade: 18,
  endereco: {
    cidade: 'Osasco',
    estado: 'SP'
  }
};

var mostraValores = function mostraValores(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  return console.log(nome, idade);
};

mostraValores(Usuario);
