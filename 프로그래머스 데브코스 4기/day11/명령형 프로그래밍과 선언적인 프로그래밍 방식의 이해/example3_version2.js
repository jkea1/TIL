//버튼 생성 & 토글 기능 추가 함수

// function ToggleButton({ $target, text }) {
//   const $button = document.createElement("button");
//   let isInit = false;

//   console.log(this);
//   this.render = () => {
//     $button.textContent = text;

//     if (!isInit) {
//       $target.appendChild($button);
//       $button.addEventListener("click", () => {
//         if ($button.style.textDecoration === "line-through") {
//           $button.style.textDecoration = "none";
//         } else {
//           $button.style.textDecoration = "line-through";
//         }
//       });
//       isInit = true;
//     }
//   };

//   this.render();
// }

// const $app = document.querySelector("#app");

// new ToggleButton({
//   $target: $app,
//   text: "Button1",
// });

// new ToggleButton({
//   $target: $app,
//   text: "Button2",
// });

// new ToggleButton({
//   $target: $app,
//   text: "Button3",
// });

//기능 추가하기1 : 3번 클릭할 때마다 alert 띄우기
//기능 추가하기2 : ToggleButton 외에 5초 뒤에 자동으로 토글 되는 버튼 만들기
//기능 추가하기3 : ButtonGroup 만들기

// new ToggleButton({
//   $target: $app,
//   text: "버튼1",
// });

// new ToggleButton({
//   $target: $app,
//   text: "버튼2",
// });

// new ToggleButton({
//   $target: $app,
//   text: "버튼3",
// });

// new ToggleButton({
//   $target: $app,
//   text: "버튼4",
// });

// new TimerButton({
//   $target: $app,
//   text: "3초 뒤에 자동으로!",
// });

// new TimerButton({
//   $target: $app,
//   text: "10초 뒤에 자동으로!",
//   timer: 1000 * 10,
// });

//명령적인 방법보다 이렇게 선언적인 방버을 써야한다.
//이렇게 바닐라js 방법으로만으로만 이렇게 구현이 되네!!
//⭐️ 이런식으로 하면 재사용성도 높아지고, 코드를 공유하기도 쉽고, 파리미터에 의해 들어온 값에 의해서만 실행되기 때문에 격리된 구조이기 때문에 외부의 개입이 최소화 되고 독립적으로 돌아갈 수 있다. 그리고 상태를 기반으로 추상화 되어 있는  UI이다.
new ButtonGroup({
  $target: $app,
  buttons: [
    {
      type: "toggle",
      text: "토글 버튼",
    },
    {
      type: "toggle",
      text: "토글 버튼",
    },
    {
      type: "timer",
      text: "타이머!",
      timer: 3000,
    },
  ],
});
