//트리(tree)
//이진 트리의 순회
//이진 트리의 순회 알고리즘은 트리에 저장된 모든 모드를 빠짐없이 살펴보고 싶을 때 사용한다. 
//깊이 우선 순회 방법으로는 전위순회(pre-order), 중위순회(in-order), 후위 순회(post-order) 가 있다. 
//
//     a
//   /  \
//  b    c 
// / \    \
//d   e    f
//
//전위 순회: abdecf
//중위 순회: D B E A F C G
//후위 순회: debfca

//트리 생성
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
} 

const a = new Node("a"); 
const b = new Node("b"); 
const c = new Node("c"); 
const d = new Node("d"); 
const e = new Node("e"); 
const f = new Node("f"); 

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//깊이 우선 탐색 - 방법1 stack
// const depthFirstPrint = (root) => {
//   const stack = [ root ];
//   while (stack.length > 0) {
//     const curr = stack.pop();
//     console.log(curr.val);
//     // add curr's children to ths top of the stack
//     // 오른쪽 노드를 먼저 push해야 왼쪽 노드가 먼저 pop 된다. 
//     if (curr.right !== null) {
//       stack.push(curr.right);
//     }
//     if (curr.left !== null) {
//       stack.push(curr.left);
//     }
//   }
// }

//깊이 우선 탐색 - 방법2 recursion
const depthFirstPrint = (root) => {
  // when the tree is empty, you don't need to anything.
  if (root === null) return;

  console.log(root.val);
  //root.left === null 일때까지 depthFirstPrint(root.left) 돌리고 
  //다음 코드 depthFirstPrint(root.right)로 넘어간다. 
  depthFirstPrint(root.left); 
  depthFirstPrint(root.right);
}

//depthFirstPrint(a)
//abdecf


//pre-order traversal
//self, left, right
const preOrder = (root) => {
  // when the tree is empty, you don't need to anything.
  if (root === null) return;

  console.log(root.val);
  preOrder(root.left); 
  preOrder(root.right);
}

preOrder(a);

//post-order traversal
//left, right, self
const postOrder = (root) => {
  // when the tree is empty, you don't need to anything.
  if (root === null) return;

  postOrder(root.left); 
  postOrder(root.right);
  console.log(root.val);
}

postOrder(a); //debfca

//in-order traversal
//left, self, right
const inOrder = (root) => {
  // when the tree is empty, you don't need to anything.
  if (root === null) return;

  inOrder(root.left); 
  console.log(root.val);
  inOrder(root.right);
}

inOrder(a); //dbeacf

