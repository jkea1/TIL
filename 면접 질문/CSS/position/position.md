### CSS Position

<image src="./img/Screenshot 2024-04-01 at 5.54.08 PM.png"/>

##### 포지션(position)이란 태그들의 위치를 결정하는 CSS 입니다.

> 모든 태그들은 처음에 `position: static` 상태입니다.

- `position: static` 일 경우 요소를 일반적인 문서 흐름에 따라 차례대로 왼쪽에서 오른쪽, 위에서 아래로 쌓이게 배치합니다.
  - 이 말은 요소들이 HTML에 작성된 순서 그대로 브라우저 화면에 표시가 된다는 것을 뜻하며, 따라서 `top`, `left`, `bottom`, `right` 속성값은 `position` 속성이 `static`일 때는 무시됩니다.
    <br/>
- `relative` 태그가 **기존 static 였을 때를 기준**으로 offset을 통해 상대적인(relative) 위치에 배치하고 싶을 때 사용합니다.
  - `position: relative` 값을 가진 요소에 `top: 5px`을 주면, 위치상으로 요소가 아래로 내려가게 되는데 그 이유는 relative는 각각의 방향을 기준으로 태그 안쪽 방향으로 이동하기 때문입니다. 바깥쪽으로 이동하게 하고 싶다면 `top: -5px`을 주면 됩니다.
    <br/>
- `position: absolute`는 **position: static 속성을 가지고 있지 않은 조상(relative, absolute, fixed)을 기준**으로 움직입니다.
  - 만약, 조상 중에 포지션이 relative, absolute, fixed인 태그가 없다면 가장 위의 태그(body)가 기준이 됩니다.
  - 참고로 absolute가 되면 div여도 더는 width: 100%가 아닙니다.
  - `absolute` 속성값은 `relative` 속성값과 함께 사용되는 경우가 많습니다. 반대말이 아닙니다.
  - 어떤 요소의 `position` 속성을 `absolute`로 설정하면, 부모 요소의 `position` 속성을 `relative`로 지정해주는 것이 관례입니다.
    <br/>
- `position: fixed`는 요소를 일반적인 문서 흐름에서 제거하고, 뷰포트(viewport)(= 브라우저 전체화면)를 기준으로 위치 시킨다.
  - `top`, `left`, `bottom`, `right` 속성은 각각 브라우저 상단, 좌측, 하단, 우측으로 부터 해당 요소가 얼마나 떨어져있는지를 결정합니다.
  - `position: fixed`인 요소도 `position: absolute`인 요소와 마찬가지로 HTML 문서 상에서 독립되어 코드 상 앞뒤에 나온 요소와 더 이상 상호작용을 하지 않습니다.
  - fixed도 absolute처럼 더는 div가 width: 100%가 아닙니다.
    <br/>
- `position: sticky`
  - `static` + `fixed` 특징을 동시에 가집니다.
  - 브라우저 화면을 스크롤링할 때 효과가 나타납니다.
  - `position: sticky` 속성을 적용한 박스는 평소에 문서 안에서 `position: static` 상태와 같이 일반적인 흐름에 따르지만 스크롤 위치가 임계점에 이르면 `position: fixed`와 같이 박스를 화면에 고정할 수 있는 속성입니다.
  - 최신 명세를 지원하는 브라우저에서는 이 속성이 동작하지만 그렇지 않은 브라우저에서는 `position: static` 상태만 표시하기 때문에 어색하지 않게 표시할 수 있는 속성입니다.

---

**🛠️ 용어 공부**

**⚙️ 오프셋**

- 오프셋(offset)
  - 처음부터 주어진 요소나 지점까지의 변위차를 나타내는 정수형이다.
  - `top`, `left`, `right`, `bottom` 값을 의미하고 기준이 되는 곳으로부터 얼마만큼 떨어져 있는지를 나타내기 위해 필요한 속성입니다.

**⚙️ 뷰포트**

- 뷰포트(viewport)는 화면에서 실제 내용이 표시되는 영역으로, 데스크톱은 사용자가 설정한 해상도가 뷰포트 영역이 되고, 스마트 기기는 기본으로 설정되어 있는 값이 뷰포트 영역이 됩니다.

**⚙️ 컨테이닝 블록**

- 컨테이닝 블록이란 요소의 위치와 크기를 지정하는 데 사용하는 블록을 의미합니다. 상대적인 값이나, 요소의 위치를 지정하는 기준이 필요할 때 사용한다는 의미입니다.
