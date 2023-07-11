export default function PhotoList({ target, initialState, onScrollEnded }) {
  let isInit = false;
  const photoList = document.createElement("div");
  target.appendChild(photoList);

  this.state = initialState;

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

    console.log(photos);

    photos.forEach((photo) => {
      // console.log(photosEl.querySelector(`li[data-id="${photo.id}"]`));
      // photo의 id 기준으로 렌더링이 되어있는지 체크
      if (photosEl.querySelector(`li[data-id="${photo.id}"]`) === null) {
        //이런게 어렵네
        // 없으면 li 생성하고 photos에 appendChild
        const li = document.createElement("li");
        li.setAttribute("data-id", photo.id);
        li.style = "list-style: none";
        li.innerHTML = `<img width="100%" src= "${photo.imagePath}"/>`;

        photosEl.appendChild(li);
      }
    });
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
