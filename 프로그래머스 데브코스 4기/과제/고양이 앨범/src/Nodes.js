import CheckState from './utils/CheckState.js'
import CompareToOriginalState from './utils/CompareToOriginalState.js'

export default function Nodes({ target, initialState, onClick, goBack }) {
  const nodesContainer = document.createElement('div')

  target.appendChild(nodesContainer)
  nodesContainer.classList.add('Nodes')

  CheckState(initialState)
  this.state = initialState

  this.setState = (nextState) => {
    CompareToOriginalState(nextState, this.state)
    CheckState(nextState)
    this.state = nextState
    this.render()
  }

  this.render = () => {
    const { isRoot, nodes } = this.state
    nodesContainer.innerHTML = `
      ${
        isRoot
          ? ''
          : `
      <div class="Node">
        <img src="https://cdn.roto.codes/images/prev.png" >
      </div>     
      `
      }
      ${nodes
        .map(
          (node) => `
        <div class="Node" data-id="${node.id}">
          <img src="${
            node.type === 'DIRECTORY'
              ? 'https://cdn.roto.codes/images/directory.png'
              : 'https://cdn.roto.codes/images/file.png'
          }">
          ${node.name}
        </div>
      `
        )
        .join('')}
    `
  }

  this.render()

  nodesContainer.addEventListener('click', (e) => {
    const nodeEl = e.target.closest('.Node')

    const { id } = nodeEl.dataset

    console.log(id)
    // 현재 this.state에서 id를 기준으로 node를 꺼내온 다음 해당 노드를 onClick에 던져주자.
    const node = this.state.nodes.find((node) => node.id === id)

    if (node) {
      onClick(node)
    } else {
      goBack()
    }
  })

  window.addEventListener('keyup', (e) => {
    console.log(e.key)
    if (e.key === 'Backspace') {
      goBack()
    }
  })
}
