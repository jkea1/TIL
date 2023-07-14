import CheckState from './utils/CheckState.js'
import CompareToOriginalState from './utils/CompareToOriginalState.js'

export default function ImageViewer({ target, onClose }) {
  const imageViewer = document.createElement('div')
  imageViewer.className = 'ImageViewer Modal'
  target.appendChild(imageViewer)

  this.state = {
    selectedImageUrl: null // null인 경우는 렌더링을 안하고 값이 있는 경우는 렌더링 한다.
  }

  this.setState = (nextState) => {
    CompareToOriginalState(nextState, this.state)
    CheckState(nextState)
    this.state = nextState
    this.render()
  }

  this.render = () => {
    imageViewer.style.display = this.state.selectedImageUrl ? 'block' : 'none'

    imageViewer.innerHTML = `
      <div class="content">
        <img src="${this.state.selectedImageUrl}" alt="" />
      </div>
    `
  }
  this.render()

  window.addEventListener('keyup', (e) => {
    // 만약 누른 키가 esc인 경우 onClose를 호출한다.
    alert(e.key)
    if (e.key === 'Escape') {
      onClose()
    }
  })

  imageViewer.addEventListener('click', (e) => {
    console.log(e.target.classList)
    if (Array.from(e.target.classList).includes('Modal')) {
      // include는 array에 적용되는 메서드이므로 배열로 만들어 줘야 한다.
      onClose()
    }
  })
}
