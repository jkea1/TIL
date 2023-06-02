const arr = [1, 2, 3, 4, 5, 6];

// console.log(arr.length);
arr.length = 3;
// console.log(arr);
arr.length = 10;
// console.log(arr);

//join
const arr1 = [1, 2, 3, 4, 5, 6];
//console.log(arr1.join(", "));

//배열을 객체같이 사용 가능하다. 
const arr2 = [1,2,3,4,5,6];
arr2['key'] = 'value';
console.log(arr2);
