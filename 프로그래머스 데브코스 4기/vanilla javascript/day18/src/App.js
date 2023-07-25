// App.js 역할 : 페이지 컴포넌트 생성, route 컴포넌트 이용해서 url path에 따라 어떤 페이지를 렌더링 할 건지 지시
import PostsPage from './PostsPage.js';
import PostEditPage from './PostEditPage.js';
import { initRouter } from './router.js';

// url 규칙
// 루트: postsPage 그리기
// /posts/{id} : id에 해당하는 post 생성
// /posts/new : 새 post 생성

export default function App({ $target }) {
  const postsPage = new PostsPage({
    $target,
  });

  const postEditPage = new PostEditPage({
    $target,
    initialState: {
      postId: 'new',
      post: {
        title: '',
        content: '',
      },
    },
  });

  this.route = () => {
    $target.innerHTML = ''; // 비워주지 않으면 항목을 클릭하면 목록 아래에 해당 posts가 렌더링된다.
    const { pathname } = window.location;

    if (pathname === '/') {
      postsPage.setState();
    } else if (pathname.indexOf('/posts/') === 0) {
      // 이게 이렇게 index로 되나?
      const [, , postId] = pathname.split('/');
      postEditPage.setState({ postId });
    }
  };

  this.route();

  initRouter(() => this.route());
}
