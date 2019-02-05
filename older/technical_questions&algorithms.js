// ************** Write an Algorithm for a Doubly LinkList ***************************
class LinkedList {
  constructor(){
    this.start = null;
    this.end = null;
    this.length = 0;
  }
  push(data){
    const _node = new Node(data);
    if(this.end === null && this.start === null){
      this.start = _node;
      this.end = _node;
    } else {
      this.end.next = _node;
      _node.prev = this.end;
       this.end = _node
    }
    this.length++;
  }
  pop(){
    const toPop = this.end.data;
    this.end = this.end.prev
    this.end.next = null;
    this.length--;
    return toPop;
  }
  print(){
    let cur = this.start;
    do{
      console.log(cur.data)
      cur = cur.next;
    }while(cur !== null)
  }
  unshift(data){
    const _node = new Node(data);
    if(this.end === null && this.start === null){
      this.start = _node;
      this.end = _node;
    }else{
      _node.next = this.start;
      this.start.prev = _node;
      this.start = _node;
    }
  }
  shift(){
    const toShift = this.start.data;
    this.start = this.start.next;
    this.start.prev = null;
    return toShift;
  }
}
class Node {
  constructor(data){
    this.prev = null;
    this.next = null;
    this.data = data;
  }
}

const ll = new LinkedList();
// ll.push(8);
// ll.push(9);
// ll.push(19);
// ll.pop();
// ll.unshift(7);
// ll.print();
// console.log('---', ll.shift())
// ll.print()
