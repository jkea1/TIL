const initApp = () => {
  const button = document.querySelector("button");
  console.log(button);
  button.addEventListener(
    "click",
    fucnction(() => {
      console.log("d");
    })
  ); // debounce(clickLog, 2000)

  debounce(clickLog, 2000);

  const clickLog = () => console.log("clicked");

  document.addEventListener("DOMContentLoaded", initApp);

  const debounce = (fn, delay) => {
    let id;
    console.log(`id at immediate load: ${id}`);
    return (...args) => {
      // return 다음의 익명함수가 클릭 event를 처리하는 handler 부분이다.
      console.log(`previous id: ${id}`);
      if (id) {
        cleatTimeout(id);
      }
      id = setTimeout(id);
      id = setTimeout(() => {
        // 너무 빨리 클릭하면 계속 재설정되고
        fn(...args); // delay 시간이 끝난 후에 fn() 이 실행된다.
      }, delay);
    };
  };
};
