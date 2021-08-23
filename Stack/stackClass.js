class Stack {
  constructor() {
    this.dataArr = [];
    this.top = -1;
  }
  pushBack(value) {
    this.dataArr.push(value);
    this.top++;
  }
  popBack() {
    if (this.dataArr.length === 0) {
      console.log("Stack is Empty");
      return;
    } else {
      console.log("the element popped off is ", this.dataArr.pop());
      this.top--;
    }
  }
  iterate() {
    let str = "";
    for (let i = this.dataArr.length - 1; i >= 0; i--) {
      str += " " + this.dataArr[i];
    }
    console.log("the elements are ", str);
    console.log(this.top);
  }
}

let stackArr = new Stack();
stackArr.pushBack(5);
stackArr.pushBack(6);
stackArr.pushBack(7);
stackArr.pushBack(8);
stackArr.pushBack(9);
stackArr.pushBack(10);
stackArr.popBack();
stackArr.iterate();
