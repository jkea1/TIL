webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return userSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == typeof value && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nvar _marked = /*#__PURE__*/_regeneratorRuntime().mark(logIn),\n  _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(logOut),\n  _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(signUp),\n  _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogIn),\n  _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(watchLogOut),\n  _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(watchSignUP),\n  _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadUser),\n  _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchFollow),\n  _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnfollow),\n  _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(userSaga);\n\n\n\n\n//요청이 실패할 것을 대비해서 try, catch로 감싸줘야 한다. \n//yield call해서 loginAPI를 실행한고 return 값을 result로 받는다. \n//yield put은 action을 dispatch 하는 기능을 한다. \n\n//LogIn\nfunction logInAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/user/login', data);\n}\nfunction logIn(action) {\n  var result;\n  return _regeneratorRuntime().wrap(function logIn$(_context) {\n    while (1) switch (_context.prev = _context.next) {\n      case 0:\n        _context.prev = 0;\n        _context.next = 3;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(logInAPI, action.data);\n      case 3:\n        result = _context.sent;\n        _context.next = 6;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_SUCCESS\"],\n          data: result.data\n        });\n      case 6:\n        _context.next = 13;\n        break;\n      case 8:\n        _context.prev = 8;\n        _context.t0 = _context[\"catch\"](0);\n        console.error(\"login err\", _context.t0);\n        _context.next = 13;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_FAILURE\"],\n          error: _context.t0.response.data\n        });\n      case 13:\n      case \"end\":\n        return _context.stop();\n    }\n  }, _marked, null, [[0, 8]]);\n}\n\n//LogOut\nfunction logOutAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/user/logout');\n}\nfunction logOut() {\n  return _regeneratorRuntime().wrap(function logOut$(_context2) {\n    while (1) switch (_context2.prev = _context2.next) {\n      case 0:\n        _context2.prev = 0;\n        _context2.next = 3;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(logOutAPI);\n      case 3:\n        _context2.next = 5;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT_SUCCESS\"]\n        });\n      case 5:\n        _context2.next = 12;\n        break;\n      case 7:\n        _context2.prev = 7;\n        _context2.t0 = _context2[\"catch\"](0);\n        console.error(\"saga logout err\", _context2.t0);\n        _context2.next = 12;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT_FAILURE\"],\n          error: _context2.t0.response.data\n        });\n      case 12:\n      case \"end\":\n        return _context2.stop();\n    }\n  }, _marked2, null, [[0, 7]]);\n}\n\n//SignUp\nfunction signUpAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post('/user', data); //data는 서버로 req.body로 넘어간다.  \n}\n\nfunction signUp(action) {\n  var result;\n  return _regeneratorRuntime().wrap(function signUp$(_context3) {\n    while (1) switch (_context3.prev = _context3.next) {\n      case 0:\n        _context3.prev = 0;\n        _context3.next = 3;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(signUpAPI, action.data);\n      case 3:\n        result = _context3.sent;\n        _context3.next = 6;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_SUCCESS\"]\n        });\n      case 6:\n        _context3.next = 13;\n        break;\n      case 8:\n        _context3.prev = 8;\n        _context3.t0 = _context3[\"catch\"](0);\n        console.log(\"signUp error\", _context3.t0);\n        _context3.next = 13;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n          type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_FAILURE\"],\n          error: _context3.t0.response.data\n        });\n      case 13:\n      case \"end\":\n        return _context3.stop();\n    }\n  }, _marked3, null, [[0, 8]]);\n}\n\n//rootSaga 만들어 두고 원하는 비동기 action을 하나씩 넣어준다.\n//LOG_IN_xxx이라는 action이 실행될때 까지 take = 기다리겠다 는 의미이다. \n//action이 실행되면 logIn 함수를 실행한다.\n\n//eventListener 같은 역할을 한다. \nfunction watchLogIn() {\n  return _regeneratorRuntime().wrap(function watchLogIn$(_context4) {\n    while (1) switch (_context4.prev = _context4.next) {\n      case 0:\n        console.log(\"watchlogin 😎\");\n        _context4.next = 3;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_IN_REQUEST\"], logIn);\n      case 3:\n      case \"end\":\n        return _context4.stop();\n    }\n  }, _marked4);\n}\nfunction watchLogOut() {\n  return _regeneratorRuntime().wrap(function watchLogOut$(_context5) {\n    while (1) switch (_context5.prev = _context5.next) {\n      case 0:\n        _context5.next = 2;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOG_OUT_REQUEST\"], logOut);\n      case 2:\n      case \"end\":\n        return _context5.stop();\n    }\n  }, _marked5);\n}\nfunction watchSignUP() {\n  return _regeneratorRuntime().wrap(function watchSignUP$(_context6) {\n    while (1) switch (_context6.prev = _context6.next) {\n      case 0:\n        _context6.next = 2;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"SIGN_UP_REQUEST\"], signUp);\n      case 2:\n      case \"end\":\n        return _context6.stop();\n    }\n  }, _marked6);\n}\nfunction watchLoadUser() {\n  return _regeneratorRuntime().wrap(function watchLoadUser$(_context7) {\n    while (1) switch (_context7.prev = _context7.next) {\n      case 0:\n        _context7.next = 2;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"LOAD_MY_INFO_REQUEST\"], signUp);\n      case 2:\n      case \"end\":\n        return _context7.stop();\n    }\n  }, _marked7);\n}\nfunction watchFollow() {\n  return _regeneratorRuntime().wrap(function watchFollow$(_context8) {\n    while (1) switch (_context8.prev = _context8.next) {\n      case 0:\n        _context8.next = 2;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"FOLLOW_REQUEST\"], signUp);\n      case 2:\n      case \"end\":\n        return _context8.stop();\n    }\n  }, _marked8);\n}\nfunction watchUnfollow() {\n  return _regeneratorRuntime().wrap(function watchUnfollow$(_context9) {\n    while (1) switch (_context9.prev = _context9.next) {\n      case 0:\n        _context9.next = 2;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__[\"UNFOLLOW_SUCCESS\"], signUp);\n      case 2:\n      case \"end\":\n        return _context9.stop();\n    }\n  }, _marked9);\n}\nfunction userSaga() {\n  return _regeneratorRuntime().wrap(function userSaga$(_context10) {\n    while (1) switch (_context10.prev = _context10.next) {\n      case 0:\n        _context10.next = 2;\n        return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchSignUP)]);\n      case 2:\n      case \"end\":\n        return _context10.stop();\n    }\n  }, _marked10);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcz9hMzg2Il0sIm5hbWVzIjpbImxvZ0luIiwibG9nT3V0Iiwic2lnblVwIiwid2F0Y2hMb2dJbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVVAiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuZm9sbG93IiwidXNlclNhZ2EiLCJsb2dJbkFQSSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJhY3Rpb24iLCJjYWxsIiwicmVzdWx0IiwicHV0IiwidHlwZSIsIkxPR19JTl9TVUNDRVNTIiwiY29uc29sZSIsImVycm9yIiwiTE9HX0lOX0ZBSUxVUkUiLCJyZXNwb25zZSIsImxvZ091dEFQSSIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsInNpZ25VcEFQSSIsIlNJR05fVVBfU1VDQ0VTUyIsImxvZyIsIlNJR05fVVBfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVTVCIsIkxPQURfTVlfSU5GT19SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7K0NBQ0E7QUFBQSxzREFnQlVBLEtBQUs7RUFBQSxtREFzQkxDLE1BQU07RUFBQSxtREFvQk5DLE1BQU07RUFBQSxtREFxQk5DLFVBQVU7RUFBQSxtREFLVkMsV0FBVztFQUFBLG1EQUlYQyxXQUFXO0VBQUEsbURBSVhDLGFBQWE7RUFBQSxtREFJYkMsV0FBVztFQUFBLG1EQUlYQyxhQUFhO0VBQUEsb0RBTUVDLFFBQVE7QUEzR2dEO0FBQ3ZEO0FBS0U7O0FBRTVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVNDLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO0VBQ3RCLE9BQU9DLDZDQUFLLENBQUNDLElBQUksQ0FBQyxhQUFhLEVBQUVGLElBQUksQ0FBQztBQUN4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T0FBTXlCLHFFQUFVLENBQUNJLG1FQUFvQixFQUFFakMsTUFBTSxDQUFDO01BQUE7TUFBQTtRQUFBO0lBQUE7RUFBQTtBQUFBO0FBR2hELFNBQVVLLFdBQVc7RUFBQTtJQUFBO01BQUE7UUFBQTtRQUNuQixPQUFNd0IscUVBQVUsQ0FBQ0ssNkRBQWMsRUFBRWxDLE1BQU0sQ0FBQztNQUFBO01BQUE7UUFBQTtJQUFBO0VBQUE7QUFBQTtBQUcxQyxTQUFVTSxhQUFhO0VBQUE7SUFBQTtNQUFBO1FBQUE7UUFDckIsT0FBTXVCLHFFQUFVLENBQUNNLCtEQUFnQixFQUFFbkMsTUFBTSxDQUFDO01BQUE7TUFBQTtRQUFBO0lBQUE7RUFBQTtBQUFBO0FBSzdCLFNBQVVPLFFBQVE7RUFBQTtJQUFBO01BQUE7UUFBQTtRQUMvQixPQUFNNkIsOERBQUcsQ0FBQyxDQUNSQywrREFBSSxDQUFDakMsYUFBYSxDQUFDLEVBQ25CaUMsK0RBQUksQ0FBQ2hDLFdBQVcsQ0FBQyxFQUNqQmdDLCtEQUFJLENBQUMvQixhQUFhLENBQUMsRUFDbkIrQiwrREFBSSxDQUFDcEMsVUFBVSxDQUFDLEVBQ2hCb0MsK0RBQUksQ0FBQ25DLFdBQVcsQ0FBQyxFQUNqQm1DLCtEQUFJLENBQUNsQyxXQUFXLENBQUMsQ0FDbEIsQ0FBQztNQUFBO01BQUE7UUFBQTtJQUFBO0VBQUE7QUFBQSIsImZpbGUiOiIuL3NhZ2FzL3VzZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Rha2UsIHB1dCwgY2FsbCwgZGVsYXksIHRha2VMYXRlc3QsIGFsbCwgZm9ya30gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge1xuICBMT0dfSU5fU1VDQ0VTUywgTE9HX09VVF9TVUNDRVNTLCBMT0dfSU5fUkVRVUVTVCxcbiAgTE9HX0lOX0ZBSUxVUkUsIExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9GQUlMVVJFLCBcbiAgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MsIFNJR05fVVBfRkFJTFVSRSwgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIEZPTExPV19SRVFVRVNULCBVTkZPTExPV19TVUNDRVNTLFxuICB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xuXG4vL+yalOyyreydtCDsi6TtjKjtlaAg6rKD7J2EIOuMgOu5hO2VtOyEnCB0cnksIGNhdGNo66GcIOqwkOyLuOykmOyVvCDtlZzri6QuIFxuLy95aWVsZCBjYWxs7ZW07IScIGxvZ2luQVBJ66W8IOyLpO2Wie2VnOqzoCByZXR1cm4g6rCS7J2EIHJlc3VsdOuhnCDrsJvripTri6QuIFxuLy95aWVsZCBwdXTsnYAgYWN0aW9u7J2EIGRpc3BhdGNoIO2VmOuKlCDquLDriqXsnYQg7ZWc64ukLiBcblxuLy9Mb2dJblxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcbn1cblxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xuICB0cnkge1xuICAgIC8v7ISc67KE6rCAIOyVhOyngSDslYgg66eM65Ok7Ja07KeE6rGw64ukLiBcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJsb2dpbiBlcnJcIiwgZXJyKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgfSk7XG4gIH1cbn1cblxuLy9Mb2dPdXRcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ291dCcpO1xufVxuXG5mdW5jdGlvbiogbG9nT3V0KCkge1xuICB0cnkge1xuICAgIHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcbiAgICB5aWVsZCBwdXQoe1xuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwic2FnYSBsb2dvdXQgZXJyXCIsIGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KVxuICB9XG59XG5cbi8vU2lnblVwXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTsgLy9kYXRh64qUIOyEnOuyhOuhnCByZXEuYm9keeuhnCDrhJjslrTqsITri6QuICBcbn1cblxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKFwic2lnblVwIGVycm9yXCIsIGVycik7XG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICB9KVxuICB9XG59XG5cblxuLy9yb290U2FnYSDrp4zrk6TslrQg65GQ6rOgIOybkO2VmOuKlCDruYTrj5nquLAgYWN0aW9u7J2EIO2VmOuCmOyUqSDrhKPslrTspIDri6QuXG4vL0xPR19JTl94eHjsnbTrnbzripQgYWN0aW9u7J20IOyLpO2WieuQoOuVjCDquYzsp4AgdGFrZSA9IOq4sOuLpOumrOqyoOuLpCDripQg7J2Y66+47J2064ukLiBcbi8vYWN0aW9u7J20IOyLpO2WieuQmOuptCBsb2dJbiDtlajsiJjrpbwg7Iuk7ZaJ7ZWc64ukLlxuXG4vL2V2ZW50TGlzdGVuZXIg6rCZ7J2AIOyXre2VoOydhCDtlZzri6QuIFxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XG4gIGNvbnNvbGUubG9nKFwid2F0Y2hsb2dpbiDwn5iOXCIpO1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFNpZ25VUCgpIHtcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTVlfSU5GT19SRVFVRVNULCBzaWduVXApO1xufVxuXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIHNpZ25VcCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1NVQ0NFU1MsIHNpZ25VcCk7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbXG4gICAgZm9yayh3YXRjaExvYWRVc2VyKSxcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcbiAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxuICAgIGZvcmsod2F0Y2hMb2dJbiksXG4gICAgZm9yayh3YXRjaExvZ091dCksXG4gICAgZm9yayh3YXRjaFNpZ25VUCksXG4gIF0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/user.js\n");

/***/ })

})