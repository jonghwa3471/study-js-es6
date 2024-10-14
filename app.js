var의 호이스팅
console.log(x); // undefined
var x = 5;
console.log(x); // 5

let과 const의 호이스팅
console.log(y); // ReferenceError: y is not defined
let y = 10;

let과 const로 선언된 변수도 호이스팅되지만, 초기화 전에는 변수를 사용할 수 없습니다. let과 const는 **"Temporal Dead Zone (TDZ)"**이라는 개념을 따르며, 선언은 호이스팅되지만 초기화가 일어나기 전까지는 해당 변수에 접근하려 하면 ReferenceError가 발생합니다.

함수 호이스팅
myFunction(); // "Hello, World!"

function myFunction() {
console.log("Hello, World!");
}

함수 선언은 변수와 다르게 전체 함수의 선언과 정의가 모두 호이스팅됩니다. 즉, 함수 선언부가 코드 내에서 어디에 위치하든지 간에 호출하기 전에 미리 사용할 수 있습니다.

함수 표현식의 호이스팅
myFunction(); // TypeError: myFunction is not a function

var myFunction = function() {
console.log("Hello, World!");
};

반면, 함수 표현식은 변수에 함수를 할당하는 방식이기 때문에, 변수 호이스팅 규칙을 따릅니다. 즉, 선언은 호이스팅되지만 할당은 호이스팅되지 않습니다.