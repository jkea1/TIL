import Header from "./Header.js";
import debounce from "./debounce.js";
import { request } from "./api.js";
import SuggestKeywords from "./SuggestKeywords.js";
import SearchResults from "./SearchResults.js";

export default function App({ target }) {
  this.state = {
    keyword: "",
    keywords: [],
    catImages: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;

    if (this.state.keyword !== nextState.keyword) {
      header.setState({ keyword: this.state.keyword });
    }
    suggestKeywords.setState({
      keywords: this.state.keywords,
    });
    if (this.state.catImages.length > 0) {
      searchResults.setState(this.state.catImages);
    }
  };

  const header = new Header({
    target,
    initialState: {
      keyword: this.state.keyword,
    },
    onKeywordInput: debounce(async (keyword) => {
      if (keyword.trim().length > 1) {
        const keywords = await request(`/keywords?q=${keyword}`);

        this.setState({
          ...this.state,
          keyword,
          keywords,
        });
      }
    }, 300), // 0.3초내 연속으로 입력이 일어나면 앞의 입력을 취소한다.
  });

  const suggestKeywords = new SuggestKeywords({
    target,
    initialState: {
      keywords: this.state.keywords,
      cursor: -1, // -1 : 아무것도 안된거
    },
    onKeywordSelect: (keyword) => {
      alert(keyword);
      this.setState({
        ...this.state,
        keyword,
        keywords: [],
      });
      fetchCatsImage();
    },
  });

  const searchResults = new SearchResults({
    target,
    initialState: this.state.catImages,
  });

  const fetchCatsImage = async () => {
    console.log(this.state.keyword);
    const { data } = await request(`/search?q=${this.state.keyword}`);
    console.log(data);
    this.setState({
      ...this.state,
      catImages: data,
      keywords: [],
    });
  };
  onEnter: () => {
    fetchCatsImage();
  };
}
