//명령형 프로그래밍 방식

// function double(arr) {
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       //어떻게 처리하는지에 대한 묘사
//       results.push(arr[i] * 2);
//     }
//   }
//   return results;
// }

//선언형 프로그래밍
//코드도 읽기 쉽고, 간결하고, 확장시 더욱 좋은 형태이다.
//고로 선언형 프로그래밍을 지향해야 한다.
function double(arr) {
  return arr
    .filter((param) => typeof param === "number")
    .map((number) => number * 2); //무엇을 원하는지에 대한 묘사
}

document.querySelector("body").innerHTML = double([3, null, 4, 5, "g"]);
