## Flex vs Grid

### Flex

- **1차원 레이아웃**을 구현하는 데 특화되어 있습니다. 컨테이너 안의 아이템들을 행 또는 열 방향으로 유연하게 배치할 수 있습니다.
- `display: flex;` (컨테이너에 적용)로 컨테이너를 flexbox로 지정합니다.
- `flex-direction` (컨테이너에 적용), `justify-content` (컨테이너에 적용), `align-items` (컨테이너에 적용)등의 속성으로 아이템의 배치를 제어할 수 있습니다.

  - justify-content
    - 주 축(main-axis)의 정렬 방법을 설정합니다.
  - align-items - 교차 축(cross-axis)에서 Items의 정렬 방법을 설정합니다.
    Items가 한 줄일 경우 많이 사용합니다.

        - 주의할 점은 Items가 flex-wrap을 통해 여러 줄(2줄 이상)일 경우에는 align-content 속성이 우선합니다.

    따라서 align-items를 사용하려면 align-content 속성을 기본값(stretch)으로 설정해야 합니다.

- 반응형 디자인에 유용하며, 수평 정렬이나 수직 정렬을 쉽게 구현할 수 있습니다.

### Grid

- **2차원 레이아웃**을 구현하는 데 특화되어 있습니다. 행과 열로 이루어진 그리드 시스템을 사용합니다.
- `display: grid;`로 컨테이너를 grid로 지정합니다.
- `grid-template-rows`, `grid-template-columns`로 행과 열의 크기를 지정할 수 있습니다. (동일하게 컨테이너에 적용한다.)
- 복잡한 레이아웃을 구현하기에 용이하며, 그리드 영역을 지정하여 유연하게 배치할 수 있습니다.

---

---

<br>

> https://www.heropy.dev/p/Ha29GI > https://www.heropy.dev/p/c6ROLZ > https://studiomeal.com/archives/197
