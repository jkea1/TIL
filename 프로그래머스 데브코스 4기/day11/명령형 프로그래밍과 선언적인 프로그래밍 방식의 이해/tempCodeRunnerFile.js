function double(arr) {
  return arr
    .filter((param) => typeof param === "number")
    .map((number) => number * 2); //무엇을 원하는지에 대한 묘사
}

//document.querySelector("body").innerHTML = double([3, null, 4, 5, "g"]);
console.log(double([1, 2, 3]));