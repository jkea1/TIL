#### 참고 자료

[[JavaScript] 클로저(closure)의 개념과 클로저를 이용한 캡슐화(encapsulation)](https://m.blog.naver.com/dlaxodud2388/222150877668)

- 변수 객체 (variable object)
  - [변수 객체](https://m.blog.naver.com/PostView.naver?blogId=dlaxodud2388&logNo=222238394694&referrerCode=0&searchKeyword=%EB%B3%80%EC%88%98%20%EA%B0%9D%EC%B2%B4)
  - 각 함수 실행 시에 해당 함수의 변수 및 함수 선언, 인자 등을 저장하는 객체입니다. 이를 통해 함수의 스코프 및 클로저 동작이 관리됩니다.

[internal slot](https://stackoverflow.com/questions/33075262/what-is-an-internal-slot-of-an-object-in-javascript)

- prototype

  - javaScript에서 상속의 개념을 갖게 해준다.

    > - 정리
    >   - Prototype : 프로토타입 객체로 하위 객체에게 자신의 프로퍼티와 메서드를 상속함
    >   - `[[Prototype]]`: 프로토타입 객체를 가리키는 내부슬롯 (inter slot)
    >   - `__proto__` : 프로토타입에 접근하기 위한 접근자 프로퍼티 [[Prototype]] 내부 슬롯에 간접적으로 접근하게 함

  - (부모입장) `Prototype` : 유전자, 자손에게 넘겨주고픈 메소드,변수를 정의함.
  - (자식입장) `__proto__` (property) : 내가 받은 유전자 접근하기. 부모에게 유전받은 prototype을 참조할 수 있다. 변경 가능하며 변경 시 이 유전자를 갖는 모든 객체의 유전자가 변경된다.

    - `__proto__`
      - 모든 객체는 `__proto__`를 통해서 자식이 물려 받은 `[[Prototype]]` 값에 접근할 수 있다.
      - `모든 자식 객체.__proto__`
      - 프로토타입 체인(prototype chain) 방식을 이용해서 `.__proto__.__proto__ ...` 부부모...의 prototype에도 접근할 수 있다.
      - 하지만 실제로 `__proto__`를 이용해 직접 접근하여 `[[Prototype]]`을 바꾸는 방법은 성능살 좋지 않아 추천하지 않는다.

- `constructor`

  - constructor 메서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드입니다.
  - [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/constructor)

- 스코프 체인 (scope chain)
  - 스코프 체인 (scope chain)은 함수의 감춰진 프로퍼티인 `[[Scopes]]` 로 참조할 수 있다.
  - `[[Scopes]]` 속성이 스코프 체인이다.
  - **자기 자신의 스코프를 제외한** 자신과 가장 가까운 변수 객체의 스코프 순으로 접근 가능하다. (자신과 가까울 수록 0번 인덱스에 위치 된다.)
  - 스코프 체인(scope chain)은 개발자 도구로 확인가능하다.
    - `console.dir(함수)`
  - 즉, 자기 자신의 스코프(scope)를 제외한 자신과 가장 가까운 변수 객체의 모든 스코프들을 스코프 체인이라 할 수 있다.
  - `[[Scopes]]`에 자기 자신이 포함되어 있지 않은 이유는

---

#### `useState()`의 동작원리와 closure

`node_modules/react/cjs/react.development.js` 로 들어가서 `useState()`코드를 뜯어보면

```
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
```

useState는 intialState를 인자로 받는 함수로 선언되어 있다. 함수를 보면 resolveDispatcher라는 또다른 함수를 통해 return된 dispatcher의 useState 메소드에 initialState를 전달한 결과를 리턴하고 있다.

다시 `resolveDispatcher()`를 타고 들어가보면 `ReactCurrentDispatcher.current` 값을 return하고 있다.

```
function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  {
    if (dispatcher === null) {
      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
    }
  }

  return dispatcher;
}
```

`ReactCurrentDispatcher`를 다시 타고 들어가 보면 전역에 선언된 `current`라는 값을 담은 변수이다.

```
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};
```

그리고 `ReactCurrentDispatcher`를 다시 타고 올라가 보면

```
var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner
};
```

다시 말해 useState는 외부에 선언된 상태값에 접근해서 이전 상태를 가져오고, 변경된 상태값을 관리하고 있다. 함수형 컴포넌트도 결국 함수이기 때문에, 클로저를 통해 선언되는 시점에 접근 가능했던 외부 상태값에 계속 접근할 수 있는 것이다. 함수형 컴포넌트에서 상태값을 변경하면 외부의 값이 변경되고, 리렌더링(=함수 재호출)을 통해 새로운 값을 받아오게 된다.

- 렉시컬 스코프
  - 선언된 위치에 따라서 상위 스코프가 결정되는 것
  - 선언되었을때의 환경
  - 자바스크립트의 모든 함수는 [[Environment]] 라는 프로퍼티에 렉시컬 스코프에 대한 참조값이 저장됩니다. [[Environment]]를 통해서 *외부 함수의 변수에도 접근*할 수 있게 된다. ([[Scopes]])와 뭐가 다른거지?
- 클로저

  -

  https://kyoung-jnn.com/posts/react-useState => 이게 맞음
  https://gonggongnote.tistory.com/58

  https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js

  ```
  // react/packages/react-reconciler/src
  /ReactFiberHooks.js

  export function renderWithHooks<Props, SecondArg>(
  current: Fiber | null,
  workInProgress: Fiber,
  Component: (p: Props, arg: SecondArg) => any,
  props: Props,
  secondArg: SecondArg,
  nextRenderLanes: Lanes,
  ): any {
  renderLanes = nextRenderLanes;
  currentlyRenderingFiber = workInProgress;

  if (__DEV__) {
    hookTypesDev =
      current !== null
        ? ((current._debugHookTypes: any): Array<HookType>)
        : null;
    hookTypesUpdateIndexDev = -1;
    // Used for hot reloading:
    ignorePreviousDependencies =
      current !== null && current.type !== workInProgress.type;

    warnIfAsyncClientComponent(Component);
  }

  workInProgress.memoizedState = null;
  workInProgress.updateQueue = null;
  workInProgress.lanes = NoLanes;

  // The following should have already been reset
  // currentHook = null;
  // workInProgressHook = null;

  // didScheduleRenderPhaseUpdate = false;
  // localIdCounter = 0;
  // thenableIndexCounter = 0;
  // thenableState = null;

  // TODO Warn if no hooks are used at all during mount, then some are used during update.
  // Currently we will identify the update render as a mount because memoizedState === null.
  // This is tricky because it's valid for certain types of components (e.g. React.lazy)

  // Using memoizedState to differentiate between mount/update only works if at least one stateful hook is used.
  // Non-stateful hooks (e.g. context) don't get added to memoizedState,
  // so memoizedState would be null during updates and mounts.
  if (__DEV__) {
    if (current !== null && current.memoizedState !== null) {
      ReactSharedInternals.H = HooksDispatcherOnUpdateInDEV;
    } else if (hookTypesDev !== null) {
      // This dispatcher handles an edge case where a component is updating,
      // but no stateful hooks have been used.
      // We want to match the production code behavior (which will use HooksDispatcherOnMount),
      // but with the extra DEV validation to ensure hooks ordering hasn't changed.
      // This dispatcher does that.
      ReactSharedInternals.H = HooksDispatcherOnMountWithHookTypesInDEV;
    } else {
      ReactSharedInternals.H = HooksDispatcherOnMountInDEV;
    }
  } else {
    ReactSharedInternals.H =
      current === null || current.memoizedState === null
        ? HooksDispatcherOnMount
        : HooksDispatcherOnUpdate;
  }

  // In Strict Mode, during development, user functions are double invoked to
  // help detect side effects. The logic for how this is implemented for in
  // hook components is a bit complex so let's break it down.
  //
  // We will invoke the entire component function twice. However, during the
  // second invocation of the component, the hook state from the first
  // invocation will be reused. That means things like `useMemo` functions won't
  // run again, because the deps will match and the memoized result will
  // be reused.
  //
  // We want memoized functions to run twice, too, so account for this, user
  // functions are double invoked during the *first* invocation of the component
  // function, and are *not* double invoked during the second incovation:
  //
  // - First execution of component function: user functions are double invoked
  // - Second execution of component function (in Strict Mode, during
  //   development): user functions are not double invoked.
  //
  // This is intentional for a few reasons; most importantly, it's because of
  // how `use` works when something suspends: it reuses the promise that was
  // passed during the first attempt. This is itself a form of memoization.
  // We need to be able to memoize the reactive inputs to the `use` call using
  // a hook (i.e. `useMemo`), which means, the reactive inputs to `use` must
  // come from the same component invocation as the output.
  //
  // There are plenty of tests to ensure this behavior is correct.
  const shouldDoubleRenderDEV =
    __DEV__ &&
    debugRenderPhaseSideEffectsForStrictMode &&
    (workInProgress.mode & StrictLegacyMode) !== NoMode;

  shouldDoubleInvokeUserFnsInHooksDEV = shouldDoubleRenderDEV;
  let children = Component(props, secondArg);
  shouldDoubleInvokeUserFnsInHooksDEV = false;

  // Check if there was a render phase update
  if (didScheduleRenderPhaseUpdateDuringThisPass) {
    // Keep rendering until the component stabilizes (there are no more render
    // phase updates).
    children = renderWithHooksAgain(
      workInProgress,
      Component,
      props,
      secondArg,
    );
  }

  if (shouldDoubleRenderDEV) {
    // In development, components are invoked twice to help detect side effects.
    setIsStrictModeForDevtools(true);
    try {
      children = renderWithHooksAgain(
        workInProgress,
        Component,
        props,
        secondArg,
      );
    } finally {
      setIsStrictModeForDevtools(false);
    }
  }

  finishRenderingHooks(current, workInProgress, Component);

  return children;
  }
  ```

2482줄
https://github.com/facebook/react/blob/v18.3.0/packages/react-reconciler/src/ReactFiberHooks.new.js#L759

a = function inner(name,age){
console.log(`제 이름은 ${name} 입니다. 저는 ${age}살 입니다. 
    저는 ${country}에 살고 ${language}를 사용해요.`);
}
