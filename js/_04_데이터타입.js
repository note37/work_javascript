
// 데이터 타입: 자바스크립트는 동적 타입의 언어이지만 내부적으로는 데이터 타입이 존재
// 데이터 타입은 원시 타입(할당받은 공간에 값이 대입)과 객체 타입이 존재
// 자바스크립트에서 문자열을 표시하기 위해서 "", '', ``를 사용 할 수 있음
// ``(백틱)은 ES6에서 추가된 문법이고 `${변수 또는 코드}`를 포함 할 수 있음
let data = "안녕하세요.\n" + "자바스크립트를 배워 봅시다.\t\t";
console.log(data);

// 템플릿 문자열 ``백틱
let dan =3;
let gugu = 8;

console.log(`${dan} 곱하기 ${gugu}는 ${dan*gugu}입니다.`)

//숫자형(Number) :자바스크립트는 정수와 실수를 구분하지 않고 숫자형으로 취급
let num1 = 10;
let num2 = 0.1
console.log(num1 + num2);
console.log(0.1 + 0.3);

// toString() : 숫자형 데이터를 문자형 데이터로 변환해주는 함수
let x = 123;
console.log(x.toString())

// 논리형 : 참 또는 거짓으로 구분
let age = 21;
let isAdult = (age > 18) ? true : false;
if(isAdult) console.log("성인 입니다.");
else console.log("미성년자 입니다.");

//undefined :
let empty; // 자바스크립트는 값이 될 때 형이 결정나고 값이 대입되지 않으면 undefined
console.log(empty)

// 객체 : 자바스크립트는 기본 자료형을 제외하고 모든 자료형은 객체이다.
let score = [80,99,100,65]
let array2 = ["아이브", "안유진", 20, true, [100, 99, 88]];
console.log(array2[1][1]);
console.log(array2[4][2]);

//객체 리터럴 (자바의 Map과 조금 유사)

let score2 = {
  kor:80,
  eng:90,
  mat:56,
  sci:99,
};

console.log(score2.mat)

// typeof : 데이터형을 확인하기 위해 사용
let name  = "장원영";
console.log(typeof name);

//toString() : 문자열로 변환하는 메소드
let fruits = ["바나나","오렌지", "사과", "망고"];
console.log(fruits.toString());
