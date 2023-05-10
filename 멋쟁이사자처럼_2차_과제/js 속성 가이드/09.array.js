let arr = ['html', 'css', 'js', 'react', 'vue'];
//console.log( arr );

//push
//배열의 마지막 요소를 추가
arr.push('go');
//console.log(arr);

//pop
//배열의 마지막 요소를 제거
arr.pop();
//console.log(arr);

//shift
//배열의 첫번째 요소를 제거
arr.shift();
//console.log(arr);

//unshift
//배열의 첫번째 요소를 추가 
arr.unshift('go');
//console.log(arr);

//splice(start, 제거할 수, 추가할 값)
arr.splice(1,3, '1','2');
//console.log(arr);

//❗️ push,pop,shift,unshift, slice 는 원형을 파괴한다는 특징을 가진다.  
//❗️ 아래의 map, filter, reduce는 원형을 파괴하지 않고 새로운 무언가를 만들때 사용합니다. 

//map
//배열을 받아서 새로운 배열을 만들때 
let map = arr.map(function(item, index) {
  return `언어의 이름 : ${item}`
})
//console.log(map);

//filter
let filter = arr.filter(function(item) {
  return item === 'go'
})
console.log("map",filter);

let number = [10, 100, 1000, 1]
let numFilter = number.filter(function(item) {
  return item > 100;
})
console.log(numFilter);

//reduce -> 가장 어렵
//arr.reduce(function(acc,cur){
//  return acc + cur
//},초기값)

let reduce = number.reduce(function(acc, cur) { //acc는 처음에 0이다. cur에는 배열의 원소가 하나씩 들어가게 된다. 
  return acc+cur;
},0);

console.log(reduce);