// import * as constants from "./constants.js";
// import App from "./App.js";

// const $body = document.querySelector("body");
// console.log(constants);
// //JSON.stringify : 메서드는 JavaScript 값이나 객체를 JSON 문자열로 변환합니다.
// $body.innerHTML = $body.innerHTML + JSON.stringify(constants, null, 2);

// new App();

import { DOMAIN_NAME as DN, PORT as P } from "./constants.js";
import App, { printToday } from "./App.js";

const $body = document.querySelector("body");

$body.innerHTML = $body.innerHTML + `<div>${DN}</div>`;
$body.innerHTML = $body.innerHTML + `<div>${P}</div>`;

printToday();
new App();
