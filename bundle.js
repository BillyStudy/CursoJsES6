"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
}); //console.log(filter);
// Desestruturação

var Usuario = {
  nome: 'Gustavo',
  idade: 18,
  endereco: {
    cidade: 'Osasco',
    estado: 'SP'
  }
}; //rest

var mostraValores = function mostraValores(_ref) {
  var nome = _ref.nome,
      resto = _objectWithoutProperties(_ref, ["nome"]);

  return console.log(nome, resto);
}; //mostraValores(Usuario);
//Rest = pegar o resto das props


function Soma() {
  for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return nums.reduce(function (total, next) {
    return total + next;
  });
} //console.log(Soma(1,2,3,4,5,6));
//[SPREAD]


var arr1 = [1, 3, 5];
var arr2 = [7, 11, 13];
var arr3 = [].concat(arr1, arr2); //console.log (arr3);
// [TEMPLATE LITERALS]

var nome = 'Gustavo';
var sobrenome = 'Ferreira';
console.log("Meu nome \xE9 ".concat(nome, " ").concat(sobrenome));
