// 텍스트 편집하는 방법 2가지
// 1. textarea
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
  // isInitialize 값에 따라서 innerHTML를 한번만 실행하게 한다.
  let isInitialize = false;

  this.state = initialState;

  $target.appendChild($editor);
  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };
  this.render = () => {
    if (!isInitialize) {
      $editor.innerHTML = `
      <input type="text" name="title" style="width: 600px;" value="${this.state.title}"/>
      <textarea name="content" style="width:600px;height: 400px;">${this.state.content}</textarea>
    `;
      isInitialize = true;
    }
  };

  this.render();

  $editor.addEventListener('keyup', (e) => {
    // 키업 event가 두군데 발생할 수 있기 때문에 event 버블링을 이용해서 title에서 발생한건지 textarea 에서 발생한건지 판단하면 된다.
    const { target } = e;

    const name = target.getAttribute('name');

    // 빈 문자열도 parse로 처리해 버리기 때문에 정확히 undefined가 아닐때만 실행되게 해야한다.
    if (this.state[name] !== undefined) {
      // 방어코드
      const nextState = {
        ...this.state,
        [name]: target.value, // key 부분을 이렇게 변수로 둘 수 있다.
      };
      this.setState(nextState);
      onEditing(this.state);
    }
  });
}
