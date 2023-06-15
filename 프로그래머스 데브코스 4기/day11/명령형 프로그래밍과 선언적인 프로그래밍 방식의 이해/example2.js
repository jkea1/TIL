const data = [
  {
    name: "차이",
    colors: ["white", "yellow", "brown"],
    age: 3,
    ear: "unfolded",
  },
  {
    name: "모나",
    colors: ["black", "white"],
    age: 2,
    ear: "unfolded",
  },
  null,
];

// 털 색이 까만색이 포함되어 있으면서
// 귀가 접혀있지 않은 고양이들을 뽑기
// function filterCats(cats) {
//   let results = [];

//   for (let i = 0; i < cats.length; i++) {
//     let cat = cats[i];
//     if (cat && cat.colors.includes("black") && cat.ear === "unfolded") {
//       results.push(cat.name);
//     }
//   }
//   return results;
// }

//선언형 방식으로 바꾼 코드
function filterCats(cats, color) {
  return cats
    .filter(
      (cat) => cat && cat.colors.includes(color) && cat.ear === "unfolded"
    )
    .map((cat) => cat.name);
}

const filteredCatsName = filterCats(data, "black");

document.querySelector("body").innerHTML = filteredCatsName;
