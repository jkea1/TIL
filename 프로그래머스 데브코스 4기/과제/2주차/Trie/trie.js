//trie(트라이)
//tree 구조이다. root 노드는 비어있다.
// ex) input: "amaz" -> output: [amazon, amazing]
//
//            (root)
//              *
//            a   e
//          m   p   b
//        a       p    a
//      z           l    y
//    o  i            e 
//  n     n             
//         g              
//
class TrieNode {
  constructor(value) {
    this.value = value;
    this.isWord = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  insert(word) {
    if(!word) return;
    let node = this.root;
    for(let i = 0; i < word.length; i++) {
      const ch = word[i];
      if(!node.children.hasOwnProperty(ch)) {
        node.children[ch] = new TrieNode(ch);
      }

      node = node.children[ch];

      if(i === word.length - 1) {
        node.isWord = true;
      }
    }
  }

  autocomplete(fragment) {
    if(!fragment) return;
    let result = [];
    let node = this.root;
    for(let i = 0; i < fragment.length; i++) {
      const ch = fragment[i];
      
      
      //root node만 있을경우
      if(!node.children.hasOwnProperty(ch)) {
        break;
      }

      node = node.children[ch];
      
      if(i === fragment.length - 1) {
        const queue = [];
        queue.push([node, fragment]);
        while(queue.length) {
          const element = queue.shift();
          const [node, word] = element;
          if(node.isWord) {
            result.push(word);
          }
          for(const j in node.children) {
            const child = node.children[j];
            const childWord = word + child.value;
            queue.push([child, childWord]);
          }
        }
      }
    }
    return result;
  } 
}

const trie = new Trie();
trie.insert('amazing');
trie.insert('amazon');

console.log(trie.autocomplete('amaz')); 
//출력 결과
//['amazone', 'amazing']