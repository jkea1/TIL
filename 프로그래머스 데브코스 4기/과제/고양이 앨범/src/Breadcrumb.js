import CheckState from './utils/CheckState.js'
import CompareToOriginalState from './utils/CompareToOriginalState.js'

export default function Breadcrumb({ target, initialState, onClick }) {
  const breadcrumb = document.createElement('nav')
  target.appendChild(breadcrumb)
  breadcrumb.className = 'Breadcrumb'

  console.log('bread', initialState)
  CheckState(initialState)
  this.state = initialState

  console.log('breadcrumb', this.state)
  this.setState = (nextState) => {
    CompareToOriginalState(nextState, this.state)
    // CheckState(nextState)
    this.state = nextState
    this.render()
  }

  console.log('breadcrumb', this.state)
  this.render = () => {
    breadcrumb.innerHTML = `
      <div class="Breadcrumb__item">Root</div>
      ${this.state
        .map(
          ({ id, name }) => `
      <div class="Breadcrumb__item" data-id="${id}">${name}</div>
      `
        )
        .join('')}
    `
  }

  breadcrumb.addEventListener('click', (e) => {
    const breadcrumbItem = e.target.closest('.Breadcrumb__item')

    const { id } = breadcrumbItem.dataset
    console.log(id)
    onClick(id)
  })
}
