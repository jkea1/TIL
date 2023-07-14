import { request } from './api.js'
import ImageViewer from './ImageViewer.js'
import Nodes from './Nodes.js'
import Loading from './Loading.js'
import Breadcrumb from './Breadcrumb.js'

export default function App({ target }) {
  this.state = {
    isRoot: true,
    isLoading: false,
    nodes: [],
    paths: [] // directory를 클릭할 때 마다 path에 쌓아주면 된다.
  }
  const loading = new Loading({
    target
  })

  const breadcrumb = new Breadcrumb({
    target,
    initialState: this.state.paths,
    onClick: async (id) => {
      // 클릭한 경로 외에 paths를 날려준다.
      if (id) {
        const nextPaths = id ? [...this.state.paths] : []
        const pathIndex = nextPaths.findIndex((path) => path.id === id)

        this.setState({
          ...this.state,
          paths: nextPaths.slice(0, pathIndex + 1)
        })
      } else {
        this.setState({
          ...this.state,
          paths: []
        })
      }
      await fetchNodes(id)
    }
  })

  const nodes = new Nodes({
    target,
    initialState: {
      isRoot: this.state.isRoot, // isRoot 값에 따라서 뒤로가기 기능 추가 여부가 결정난다.
      nodes: this.state.nodes,
      selectedImageUrl: null
    },
    onClick: async (node) => {
      if (node.type === 'DIRECTORY') {
        await fetchNodes(node.id)

        this.setState({
          ...this.state,
          paths: [...this.state.paths, node]
        })
      }

      if (node.type === 'FILE') {
        this.setState({
          ...this.state,
          selectedImageUrl: `https://kdt-frontend.cat-api.programmers.co.kr/static${node.filePath}`
        })
      }
    },

    goBack: async () => {
      const nextPaths = [...this.state.paths]
      console.log('전', nextPaths)
      nextPaths.pop() //path에 마지막거 제거
      console.log('후', nextPaths)

      this.setState({
        ...this.state,
        paths: nextPaths
      })

      if (nextPaths.length === 0) {
        // 루트 페이지에서 아무 것도 클릭을 안 한 경우(id값이 없는 경우)
        await fetchNodes()
      } else {
        await fetchNodes(nextPaths[nextPaths.length - 1].id)
      }
    }
  })

  const imageViewer = new ImageViewer({
    target,
    onClose: () => {
      // 모달창의 esc를 클릭했을때 onClose()를 호출해 주면 된다.
      // onClose()가 호출되면 selectedImageUrl를 null로 바꿔준다.
      this.setState({
        ...this.state,
        selectedImageUrl: null // 닫는 처리가 된다.
      })
    }
  })

  this.setState = (nextState) => {
    this.state = nextState
    console.log(this.state.paths)

    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes
    })

    imageViewer.setState({
      selectedImageUrl: this.state.selectedImageUrl
    })

    // state가 바뀔때 마다 App에 있는 this.state.isLoading 값을 넣어준다.
    loading.setState(this.state.isLoading)

    breadcrumb.setState(this.state.paths)
  }

  const fetchNodes = async (id) => {
    // fetch가 시작하면 isLoading을 true로 둔다.
    this.setState({
      ...this.state,
      isLoading: true
    })

    const nodes = await request(id ? `/${id}` : `/`)
    // console.log(nodes)

    this.setState({
      ...this.state,
      nodes,
      isRoot: id ? false : true,
      isLoading: false // fetch가 끝나면 isLoading을 다시 false로 둔다.
    })
  }

  // 맨 처음에 실행할때 : id가 없으니까 root '/' 를 불러온다.
  // node클릭시 : id가 있으니 /${id} 를 불러온다.
  fetchNodes()
}
