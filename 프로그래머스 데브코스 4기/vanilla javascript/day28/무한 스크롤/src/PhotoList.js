export default function PhotoList({ target, initialState, onScrollEnded }) {
  let isInit = false;
  const photoList = document.createElement("div");
  target.appendChild(photoList);

  this.state = initialState;

  const observer = new IntersectionObserver(
    (entries) => {
      // observe 할 대상을 어러개 지정할 수 있다.
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.state.isLoading) {
          console.log("화면 끝", entry);
          if (this.state.totalCount > this.state.photos.length) {
            onScrollEnded();
          }
        }
      });
    },
    {
      threshold: 0.5, // 이미지가 절반 정도 보여졌을때 호출된다.
    }
  );

  let lastLi = null;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!isInit) {
      // ul과 button은 한번만 렌더링하고 그 이후에 li 항목은 appendChild 첨가 시키자.
      photoList.innerHTML = `
        <ul class="PhotoList__photos"></ul>
      `;
      isInit = true;
    }

    const { photos } = this.state;

    const photosEl = photoList.querySelector(".PhotoList__photos"); // ul

    photos.forEach((photo) => {
      // console.log(photosEl.querySelector(`li[data-id="${photo.id}"]`));
      // photo의 id 기준으로 렌더링이 되어있는지 체크
      if (photosEl.querySelector(`li[data-id="${photo.id}"]`) === null) {
        //이런게 어렵네
        // 없으면 li 생성하고 photos에 appendChild
        const li = document.createElement("li");
        li.setAttribute("data-id", photo.id);
        li.style = "list-style: none; min-height: 800px";
        li.innerHTML = `<img width="100%" src= "${photo.imagePath}"/>`;

        photosEl.appendChild(li);
      }
    });

    const nextLi = photosEl.querySelector("li:last-child");

    if (nextLi !== null) {
      // 이전에 감시하고 있던 값을 뺴고 갱신해준다.
      // 여기 말고 observer 안에서 시작할때 시작할때 넣어줘도 된다.
      if (lastLi !== null) {
        observer.unobserve(lastLi);
      }
      lastLi = nextLi;
      observer.observe(lastLi); // 마지막 li를 감시하는 역할을 한다.
    }
  };

  this.render();

  // photoList.addEventListener("click", (e) => {
  //   if (e.target.className === "PhotoList__loadMore" && !this.state.isLoading) {
  //     // 로딩중이 아닐때만 호출 되게 해보자
  //     onScrollEnded();
  //   }
  // });

  window.addEventListener("scroll", () => {
    const { isLoading, totalCount, photos } = this.state;
    // 맨 아래로 내려가면 true로 바뀐다.
    const isScrollEnded =
      window.innerHeight + window.scrollY + 100 >= document.body.offsetHeight;

    console.log(isScrollEnded, !isLoading, photos.length, totalCount);

    // 전체 photoList의 갯수와 totalcount의 갯수가 같으면 더이상 이벤트를 실행시키지 않도록 한다.
    if (isScrollEnded && !isLoading /* &&photos.length < totalCount */) {
      // !this.state.isLoading 이거 안해주면 계속 데이터를 불어오게 되버린다.
      onScrollEnded();
    }
  });
}

// <button class="PhotoList__loadMore" style="width:100%; height: 200px; font-size: 20px">Load More</button>
