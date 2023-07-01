// title 과 content 값이 업데이트가 될때 마다 'keyup' event를 이용해서 editor state를 바꾸고 onEditing 콜백을 호출한다.

// 텍스트 편집하는 방법 2가지
// 1. textarea -> css 작업이 안된다.
// <textarea name="content" style="width:600px;height: 400px;">${this.state.content}</textarea>
// 2. content editable

export default function Editor({
  $target,
  initialState = {
    title: '',
    content: '',
  },
  onEditing,
}) {
  const $editor = document.createElement('div');
  $target.appendChild($editor);
  let isInit = false;

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    $editor.querySelector('[name=title]').value = this.state.title;
    $editor.querySelector('[name=content]').value = this.state.content;
    this.render();
  };

  this.render = () => {
    if (!isInit) {
      $editor.innerHTML = `
              <input type="text" name="title" style="width:600px;" value="${this.state.title}">
              <textarea name="content" style="width:600px; height:600px;">${this.state.content}</textarea>
          `;
      isInit = true;
    }
  };

  this.render();

  $editor.addEventListener('keyup', (e) => {
    const { target } = e;
    const name = target.getAttribute('name');

    if (this.state[name] !== undefined) {
      const nextState = {
        ...this.state,
        [name]: target.value,
      };

      this.setState(nextState);
      onEditing(this.state);
    }
  });
}

// export default function Editor({
//   $target,
//   initialState = {
//     title: '',
//     content: '',
//   },
//   onEditing,
// }) {
//   const $editor = document.createElement('div');
//   // isInitialize 값에 따라서 innerHTML를 한번만 실행하게 한다.

//   $target.appendChild($editor);

//   let isInit = false;

//   this.setState = (nextState) => {
//     this.state = nextState;
//     $editor.querySelector('[name=title]').value = this.state.title;
//     $editor.querySelector('[name=content]').value = this.state.content;

//     // 서버에서 내려오는 개행값은 \n
//     // textarea에서는 |n으로 개행을 처리해줌

//     this.render();
//   };

//   // this.render = () => {
//   //   const richContent = this.state.content
//   //     .split('\n')
//   //     .map((line) => {
//   //       if (line.indexOf('# ') === 0) {
//   //         return `<h1>${line.substr(2)}</h1>`;
//   //       } else if (line.indexOf('## ' === 0)) {
//   //         return `<h2>${line.substr(3)}</h2>`;
//   //       } else if (line.indexOf('### ' === 0)) {
//   //         return `<h3>${line.substr(4)}</h3>`;
//   //       }
//   //       return line;
//   //     })
//   //     .join(`<br>`);

//   //   $editor.querySelector('[name=title]').value = this.state.title;
//   //   $editor.querySelector('[name=content]').innerHTML = richContent; // div 일 경우 innerHTML로 넣어줘야 한다.
//   // };

//   this.render = () => {
//     if (!isInit) {
//       $editor.innerHTML = `
//             <input type="text" name="title" style="width:600px;" value="${this.state.title}">
//             <textarea name="content" style="width:600px; height:600px;">${this.state.content}</textarea>
//         `;
//       isInit = true;
//     }
//   };

//   this.render();

//   // textArea를 이용한 경우
//   $editor.addEventListener('keyup', (e) => {
//     // 키업 event가 두군데 발생할 수 있기 때문에 event 버블링을 이용해서 title에서 발생한건지 textarea 에서 발생한건지 판단하면 된다.
//     const { target } = e;

//     const name = target.getAttribute('name');

//     // 빈 문자열도 parse로 처리해 버리기 때문에 정확히 undefined가 아닐때만 실행되게 해야한다.
//     if (this.state[name] !== undefined) {
//       // 방어코드
//       const nextState = {
//         ...this.state,
//         [name]: target.value, // key 부분을 이렇게 변수로 둘 수 있다.
//       };
//       this.setState(nextState);
//       onEditing(this.state);
//     }
//   });

//   // content editable를 사용할 경우 title 과 content를 불리하자
//   // $editor.querySelector('[name=title').addEventListener('keyup', (e) => {
//   //   const nextState = {
//   //     ...this.state,
//   //     title: e.target,
//   //   };

//   //   this.setState(nextState);
//   //   onEditing(this.state);
//   // });

//   // $editor.querySelector('[name=content]').addEventListener('input', (e) => {
//   //   console.log(e.target.innerHTML);
//   // });
// }
