//토글 버튼 만들기
//버튼 3개 만들기
const $button1 = document.createElement("button");
$button1.textContent = "Button1"; //아직 메모리 상에서만 생성이 된 것이다.

const $button2 = document.createElement("button");
$button2.textContent = "Button2";

const $button3 = document.createElement("button");
$button3.textContent = "Button3";

//만든 버튼을 화면에 그린다.
const $main = document.querySelector("#app");
$main.appendChild($button1);
$main.appendChild($button2);
$main.appendChild($button3);

const toggleButton = ($button) => {
  if ($button.style.textDecoration === "line-through") {
    $button.style.textDecoration = "none";
  } else {
    $button.style.textDecoration = "line-through";
  }
};

//버튼을 클릭하면 삭선이 그어진다.
document.querySelectorAll("button").forEach(($button) => {
  $button.addEventListener("click", (e) => {
    const { target } = e;
    toggleButton(target);
  });
});
