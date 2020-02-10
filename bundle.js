"use strict";

var arr = [1, 3, 5, 7, 11];
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
console.log(find);
