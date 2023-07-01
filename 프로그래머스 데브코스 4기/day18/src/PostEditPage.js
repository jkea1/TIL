import { request } from './api.js';
import Editor from './Editor.js';
import { push } from './router.js';
import { getItem, setItem, removeItem } from './storage.js';
import LinkButton from './LinkButton.js';

export default function PostEditPage({ $target, initialState }) {
  const $page = document.createElement('div');

  this.state = initialState;

  let postLocalSaveKey = `temp-post-${this.state.postId}`;

  const post = getItem(postLocalSaveKey, {
    title: '',
    content: '',
  });

  let timer = null;

  const editor = new Editor({
    $target: $page,
    initialState: post,
    onEditing: (post) => {
      // 수정 할때 마다 onEditing이 발생한다.
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => {
        setItem(postLocalSaveKey, {
          ...post,
          tempSaveDate: new Date(),
        });

        const isNew = this.state.postId === 'new';
        if (isNew) {
          const createdPost = await request('/posts', {
            method: 'POST',
            body: JSON.stringify(post),
          });
          // history.replaceState 작업을 해 줘야 뒤로 가기 했을때 이상하지 않다.
          history.replaceState(null, null, `/posts/${createdPost.id}`);
          removeItem(postLocalSaveKey);

          // 업데이트 할 경우
          this.setState({
            postId: createdPost.id,
          });
        } else {
          await request(`/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
          });
          removeItem(postLocalSaveKey);
        }
      }, 3000);
    },
  });

  this.setState = async (nextState) => {
    if (this.state.postId !== nextState.postId) {
      postLocalSaveKey = `temp-post-${nextState.postId}`;
      this.state = nextState; // 이거 안 넣더니 post가 비어 있네
      if (this.state.postId === 'new') {
        const post = getItem(postLocalSaveKey, {
          title: '',
          content: '',
        });
        this.render();
        editor.setState(post);
      } else {
        await fetchPost();
      }
      return;
    }

    this.state = nextState;
    this.render();
    // 상태가 바꼈으니까 fetchPost를 다시 호출한다.
    editor.setState(
      this.state.post || {
        title: '',
        content: '',
      }
    );
  };

  this.render = () => {
    $target.appendChild($page);
  };

  const fetchPost = async () => {
    const { postId } = this.state;

    if (postId !== 'new') {
      const post = await request(`/posts/${postId}`);

      const tempPost = getItem(postLocalSaveKey, {
        title: '',
        content: '',
      });

      if (tempPost.tempSaveDate && tempPost.tempSaveDate > post.updated_at) {
        if (confirm('저장되지 않은 임시 데이터가 있습니다. 불러올까요?')) {
          this.setState({
            ...this.state,
            post: tempPost,
          });
          return;
        }
      }

      this.setState({
        ...this.state,
        post,
      });
    }
  };

  // 이전 페이지로 갈 수 있는 버튼
  new LinkButton({
    $target: $page,
    initialState: {
      text: '목록으로 이동',
      link: '/',
    },
  });
}
