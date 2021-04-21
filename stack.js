function Stack() {
  this.dataStore = []; // 스택 요소를 저장하는 배열
  this.top = 0; // (프로퍼티) 현재 위치
  this.push = push; // 스택에 새 요소 추가
  this.pop = pop; // 스택의 탑에 있는 요소를 반환(영구적 삭제)
  this.peek = peek; // 스택의 탑에 있는 요소를 반환 (제거하지 않고 내용만 확인)
  this.clear = clear; // 스택의 모든 요소 삭제
  this.length = length; // 스택에 포함된 요소 수 반환
}

// push
function push(element) {
  // 현재 top 위치에 새 요소를 추가한 다음 top 증가.
  this.dataStore[this.top++] = element;
}

// pop
function pop() {
  // 스택의 탑 위치에 있는 요소를 반환한 다음 다음 top 변수를 감소.
  return this.dataStore[--this.top];
}

// peek
function peek() {
  return this.dataStore[this.top - 1];
}

// length
function length() {
  return this.top;
}

// clear
function clear() {
  // top 변수를 0으로 설정하면 스택 전체 요소가 삭제.
  this.top = 0;
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("현재 스택 요소의 갯수 : " + stack.length());
console.log(stack.pop());
console.log("pop을 하고 난 후 현재 스택 요소의 갯수 : " + stack.length());
console.log(stack.peek());
console.log("peek을 하고 난 후 현재 스택 요소의 갯수 : " + stack.length());


