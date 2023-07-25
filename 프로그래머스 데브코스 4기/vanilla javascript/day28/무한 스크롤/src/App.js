import PhotoList from "./PhotoList.js";
import { request } from "./api.js";

export default function App({ target }) {
  const h1 = document.createElement("h1");
  h1.innerText = "Cat Photos";
  h1.style.textAlign = "center";
  target.appendChild(h1);

  // 여기서 this.state 정의해 줘야 하는 걸 생각할 줄 알아야 해.
  this.state = {
    limit: 5,
    nextStart: 0, //limit 갯수 만큼 계속 더해짐
    photos: [],
    totalCount: 0,
    isLoading: false, //datafetch를 시작하면 true로 바꾼다.
  };

  const photoListComponent = new PhotoList({
    target,
    initialState: {
      photos: this.state.photos,
      isLoading: this.state.isLoading,
      totalCount: this.state.totalCount,
    },
    onScrollEnded: async () => {
      await fetchPhotos();
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;
    photoListComponent.setState({
      isLoading: this.state.isLoading,
      photos: nextState.photos,
      totalCount: this.state.totalCount,
    });
  };

  const fetchPhotos = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    const { limit, nextStart } = this.state;
    const photos = await request(
      `/cat-photos?_limit=${limit}&_start=${nextStart}`
    );

    this.setState({
      ...this.state,
      nextStart: nextStart + limit, // fetchPhotos가 호출이 될때마다 start가 증가된다.
      photos: this.state.photos.concat(photos), // 배열 2개를 합쳐준다.
      isLoading: false,
    });
  };

  const initialize = async () => {
    const totalCount = await request("/cat-photos/count");

    this.setState({
      ...this.state,
      totalCount,
    });

    await fetchPhotos();
  };

  initialize();
}
