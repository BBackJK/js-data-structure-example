function test() {
  var a = 0;
  // 변경 전 값 로그 확인
  console.log(a);

  // 값 변경 함수 호출
  changeValue(a);

  // 변경 후 값 로그 확인
  console.log(a);
}

function changeValue(v) {
  v = 10;
}

test();
// 값 변경 x
