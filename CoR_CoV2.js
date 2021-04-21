function test() {
  var myCar = { make: "Honda", model: "Accord", year: 1998 },
    x,
    y;

  x = myCar.make;
  test2(myCar);
  y = myCar.make;

  console.log("x :" + x + ", y:" + y);
}

function test2(obj) {
  obj.make = "Toyota";
}

test();
// x: Honda, y: Toyota
// 값이 변경됨.
// CoR_CoV 두 가지의 예제로 보았을 때
// 자바스크립트는 항상 Call by Value
